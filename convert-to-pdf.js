const { mdToPdf } = require("md-to-pdf");
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const MERMAID_JS_PATH = path.resolve(
  __dirname,
  "node_modules",
  "mermaid",
  "dist",
  "mermaid.min.js"
);

const CHROME_ARGS = [
  "--no-sandbox",
  "--disable-setuid-sandbox",
  "--disable-dev-shm-usage",
  "--disable-background-networking",
  "--disable-default-apps",
  "--disable-extensions",
  "--disable-sync",
  "--disable-component-update",
  "--disable-domain-reliability",
  "--disable-client-side-phishing-detection",
  "--disable-component-extensions-with-background-pages",
  "--no-first-run",
  "--disable-breakpad",
];

const CSS = `
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #24292e;
    max-width: 980px;
    margin: 0 auto;
    padding: 32px;
  }
  h1, h2, h3, h4, h5, h6 { margin-top: 24px; margin-bottom: 16px; font-weight: 600; }
  h1 { font-size: 2em; padding-bottom: 0.3em; border-bottom: 1px solid #eaecef; }
  h2 { font-size: 1.5em; padding-bottom: 0.3em; border-bottom: 1px solid #eaecef; }
  h3 { font-size: 1.25em; }
  code {
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 85%;
    padding: 0.2em 0.4em;
  }
  pre {
    background-color: #f6f8fa;
    border-radius: 6px;
    font-size: 85%;
    line-height: 1.45;
    overflow: auto;
    padding: 16px;
  }
  pre code { background: transparent; padding: 0; }
  blockquote {
    border-left: 4px solid #dfe2e5;
    color: #6a737d;
    margin: 0;
    padding: 0 1em;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 16px;
  }
  table th, table td {
    border: 1px solid #dfe2e5;
    padding: 6px 13px;
  }
  table th { background-color: #f6f8fa; font-weight: 600; }
  table tr:nth-child(2n) { background-color: #f6f8fa; }
  hr { border: none; border-top: 1px solid #eaecef; margin: 24px 0; }
  a { color: #0366d6; text-decoration: none; }
  img { max-width: 100%; }
  .mermaid-diagram { text-align: center; margin: 16px 0; }
  .mermaid-diagram svg { max-width: 100%; height: auto; }
`;

const MERMAID_BLOCK_REGEX = /```mermaid\n([\s\S]*?)```/g;

/**
 * Render mermaid code blocks to SVG using Puppeteer and the local mermaid bundle.
 */
async function renderMermaidToSvg(mermaidBlocks) {
  if (mermaidBlocks.length === 0) return [];

  const browser = await puppeteer.launch({
    args: CHROME_ARGS,
  });
  const page = await browser.newPage();

  const divsHtml = mermaidBlocks
    .map((code, i) => `<pre class="mermaid" id="m${i}">${escapeHtml(code)}</pre>`)
    .join("\n");

  await page.setContent(`<html><body>${divsHtml}</body></html>`);

  if (!fs.existsSync(MERMAID_JS_PATH)) {
    await browser.close();
    throw new Error(
      `Mermaid bundle not found at ${MERMAID_JS_PATH}. Run "npm install" to install dependencies.`
    );
  }
  await page.addScriptTag({ path: MERMAID_JS_PATH });
  await page.evaluate(
    'mermaid.initialize({ startOnLoad: false, theme: "default" })'
  );
  await page.evaluate('mermaid.run({ querySelector: ".mermaid" })');

  const svgs = await page.evaluate(
    'Array.from(document.querySelectorAll(".mermaid")).map(el => el.innerHTML)'
  );

  await browser.close();
  return svgs;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Replace mermaid code blocks in markdown with pre-rendered SVG diagrams.
 */
async function processMermaid(markdown) {
  const blocks = [];
  for (const match of markdown.matchAll(MERMAID_BLOCK_REGEX)) {
    blocks.push(match[1]);
  }

  if (blocks.length === 0) return markdown;

  console.log(`  Rendering ${blocks.length} Mermaid diagram(s)...`);
  const svgs = await renderMermaidToSvg(blocks);

  let i = 0;
  return markdown.replace(MERMAID_BLOCK_REGEX, () => {
    const svg = svgs[i++];
    return `<div class="mermaid-diagram">${svg}</div>`;
  });
}

async function convertFile(inputPath) {
  const resolvedInput = path.resolve(inputPath);

  if (!fs.existsSync(resolvedInput)) {
    console.error(`Error: File not found: ${resolvedInput}`);
    process.exit(1);
  }

  const outputDir = path.join(path.dirname(resolvedInput), "output");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const baseName = path.basename(resolvedInput, path.extname(resolvedInput));
  const outputPath = path.join(outputDir, `${baseName}.pdf`);

  console.log(`Converting: ${resolvedInput}`);
  console.log(`Output:     ${outputPath}`);

  const markdown = fs.readFileSync(resolvedInput, "utf-8");
  const processedMarkdown = await processMermaid(markdown);

  const pdf = await mdToPdf(
    { content: processedMarkdown },
    {
      css: CSS,
      pdf_options: {
        format: "A4",
        margin: { top: "25mm", bottom: "25mm", left: "20mm", right: "20mm" },
        printBackground: true,
      },
      launch_options: {
        args: CHROME_ARGS,
      },
    }
  );

  if (pdf) {
    fs.writeFileSync(outputPath, pdf.content);
    console.log(`✅ PDF saved: ${outputPath}`);
  }
}

async function convertAll() {
  const dir = process.cwd();
  const mdFiles = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  if (mdFiles.length === 0) {
    console.log("No markdown files found in the current directory.");
    return;
  }

  console.log(`Found ${mdFiles.length} markdown file(s) to convert.\n`);

  for (const file of mdFiles) {
    await convertFile(path.join(dir, file));
    console.log();
  }

  console.log("All conversions complete!");
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes("--all")) {
    await convertAll();
  } else if (args.length > 0 && !args[0].startsWith("-")) {
    await convertFile(args[0]);
  } else {
    console.log("Usage:");
    console.log("  node convert-to-pdf.js <file.md>    Convert a specific file");
    console.log("  node convert-to-pdf.js --all         Convert all .md files");
    console.log("");
    console.log("Or use npm scripts:");
    console.log("  npm run convert -- <file.md>         Convert a specific file");
    console.log("  npm run convert:all                  Convert all .md files");
  }
}

main().catch((err) => {
  console.error("Conversion failed:", err.message);
  process.exit(1);
});
