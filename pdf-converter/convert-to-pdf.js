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
  /* ── Base Typography ── */
  body {
    font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.7;
    color: #1a1a1a;
    max-width: 100%;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  p {
    margin: 0 0 12pt 0;
    text-align: justify;
    orphans: 3;
    widows: 3;
  }

  /* ── Headings ── */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: #111;
    page-break-after: avoid;
    break-after: avoid;
    margin-top: 28pt;
    margin-bottom: 10pt;
    line-height: 1.3;
  }
  h1 {
    font-size: 22pt;
    padding-bottom: 6pt;
    border-bottom: 2.5px solid #2c3e50;
    margin-top: 0;
    margin-bottom: 16pt;
    letter-spacing: -0.3px;
  }
  h2 {
    font-size: 17pt;
    padding-bottom: 4pt;
    border-bottom: 1.5px solid #bdc3c7;
    color: #2c3e50;
  }
  h3 { font-size: 14pt; color: #34495e; }
  h4 { font-size: 12pt; color: #34495e; font-style: italic; }
  h5 { font-size: 11pt; color: #555; }
  h6 { font-size: 10pt; color: #777; text-transform: uppercase; letter-spacing: 0.5px; }

  /* ── Inline Code ── */
  code {
    background-color: #f0f4f8;
    border: 1px solid #d6dce4;
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 9pt;
    padding: 1pt 4pt;
    color: #c7254e;
  }

  /* ── Code Blocks ── */
  pre {
    background-color: #f7f9fb;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    font-size: 8.5pt;
    line-height: 1.5;
    overflow: auto;
    padding: 12pt 14pt;
    margin: 8pt 0 14pt 0;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  pre code {
    background: transparent;
    border: none;
    padding: 0;
    font-size: inherit;
    color: inherit;
  }

  /* ── Blockquotes ── */
  blockquote {
    border-left: 4px solid #3498db;
    background-color: #f0f7fd;
    color: #2c3e50;
    margin: 10pt 0;
    padding: 8pt 14pt;
    border-radius: 0 4px 4px 0;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  blockquote p { margin: 4pt 0; }

  /* ── Tables ── */
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 12pt 0 16pt 0;
    font-size: 9.5pt;
    page-break-inside: auto;
    break-inside: auto;
  }
  table thead {
    display: table-header-group;
  }
  table tr {
    page-break-inside: avoid;
    break-inside: avoid;
  }
  table th, table td {
    border: 1px solid #cfd8dc;
    padding: 8pt 12pt;
    text-align: left;
    vertical-align: top;
  }
  table th {
    background-color: #2c3e50;
    color: #ffffff;
    font-weight: 600;
    font-size: 9.5pt;
    letter-spacing: 0.3px;
  }
  table tr:nth-child(even) { background-color: #f5f7f9; }
  table tr:hover { background-color: #eef2f5; }
  table td code {
    font-size: 8.5pt;
  }

  /* ── Lists ── */
  ul, ol {
    margin: 6pt 0 12pt 0;
    padding-left: 22pt;
  }
  li {
    margin-bottom: 4pt;
    line-height: 1.6;
  }
  li > p { margin: 2pt 0; }
  li > ul, li > ol { margin: 2pt 0 2pt 0; }

  /* ── Horizontal Rules ── */
  hr {
    border: none;
    border-top: 1.5px solid #dce1e6;
    margin: 24pt 0;
  }

  /* ── Links ── */
  a {
    color: #2980b9;
    text-decoration: none;
    border-bottom: 1px dotted #2980b9;
  }

  /* ── Images ── */
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 14pt auto;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }

  /* ── Strong / Emphasis ── */
  strong { font-weight: 700; color: #111; }
  em { font-style: italic; }

  /* ── Mermaid Diagrams ── */
  .mermaid-diagram {
    text-align: center;
    margin: 16pt 0;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .mermaid-diagram svg { max-width: 100%; height: auto; }

  /* ── Page Break Utilities ── */
  h1, h2, h3 { page-break-after: avoid; }
  pre, blockquote, table, img, .mermaid-diagram { page-break-inside: avoid; }
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
        margin: { top: "20mm", bottom: "24mm", left: "20mm", right: "20mm" },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<span></span>',
        footerTemplate: `
          <div style="width: 100%; font-size: 9px; color: #888; padding: 0 20mm; display: flex; justify-content: space-between; align-items: center;">
            <span>${baseName}</span>
            <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
          </div>`,
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

async function convertAll(dir) {
  dir = dir ? path.resolve(dir) : process.cwd();
  const mdFiles = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  if (mdFiles.length === 0) {
    console.log(`No markdown files found in: ${dir}`);
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
    const allIdx = args.indexOf("--all");
    const dir = args[allIdx + 1] && !args[allIdx + 1].startsWith("-")
      ? args[allIdx + 1]
      : undefined;
    await convertAll(dir);
  } else if (args.length > 0 && !args[0].startsWith("-")) {
    await convertFile(args[0]);
  } else {
    console.log("Usage:");
    console.log("  node convert-to-pdf.js <file.md>          Convert a specific file");
    console.log("  node convert-to-pdf.js --all [directory]  Convert all .md files in directory");
    console.log("");
    console.log("Or use npm scripts:");
    console.log("  npm run convert -- <file.md>              Convert a specific file");
    console.log("  npm run convert:all                       Convert all .md files");
  }
}

main().catch((err) => {
  console.error("Conversion failed:", err.message);
  process.exit(1);
});
