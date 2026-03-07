const { mdToPdf } = require("md-to-pdf");
const fs = require("fs");
const path = require("path");

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
`;

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

  const pdf = await mdToPdf(
    { path: resolvedInput },
    {
      css: CSS,
      pdf_options: {
        format: "A4",
        margin: { top: "25mm", bottom: "25mm", left: "20mm", right: "20mm" },
        printBackground: true,
      },
      launch_options: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
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
