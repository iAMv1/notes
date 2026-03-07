# notes

## Download as PDF

Every time a markdown file is updated on the `main` branch, a GitHub Actions workflow automatically converts all notes to styled PDFs with rendered Mermaid diagrams.

### Getting the PDFs

1. Go to the **[Actions](../../actions)** tab of this repository
2. Click the latest **Convert Markdown to PDF** workflow run
3. Download the **pdf-notes** artifact from the bottom of the run page

You can also trigger a conversion manually from the Actions tab using the **Run workflow** button.

### Local Setup (optional)

If you prefer to generate PDFs locally:

#### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)

#### Install

```bash
npm install
```

#### Usage

Convert a specific file:

```bash
npm run convert -- ajp.md
```

Convert all markdown files:

```bash
npm run convert:all
```

PDFs are saved to the `output/` directory.