# notes

## 📄 PDF Notes

Every time a Markdown file in the `notes/` folder is pushed to the `main` branch, a GitHub Actions workflow automatically converts it to a styled PDF (with rendered Mermaid diagrams) and commits the result back to this repository.

### Where are the PDFs stored?

Generated PDFs live in the **[`notes/output/`](notes/output/)** folder of this repository.  
After any push that changes a `.md` file in `notes/`, the workflow runs and the updated PDF appears there within a few minutes.

### How to access a PDF

**On GitHub:**
1. Open the **[`notes/output/`](notes/output/)** folder in this repository.
2. Click the PDF file you want (e.g. `ajp.pdf`).
3. Click **Download** (or the download icon) to save it.

**Direct download links** (once a PDF has been generated at least once):

| Note | PDF |
|------|-----|
| `ajp.md` | [`notes/output/ajp.pdf`](notes/output/ajp.pdf) |
| `ajp12.md` | [`notes/output/ajp12.pdf`](notes/output/ajp12.pdf) |
| `pme.md` | [`notes/output/pme.pdf`](notes/output/pme.pdf) |
| `pme12.md` | [`notes/output/pme12.pdf`](notes/output/pme12.pdf) |

### Keeping PDFs up to date

| Trigger | What happens |
|---------|-------------|
| **Push to `main`** (any `.md` file in `notes/`) | Only the changed files are re-converted and committed automatically. |
| **Manual** — [Run workflow](../../actions/workflows/convert-to-pdf.yml) → **Run workflow** button | All Markdown files are converted and committed. Use this to regenerate everything at once. |

> **No folder to create.** The `notes/output/` folder already exists in the repo. The workflow writes PDFs there automatically — you don't need to do anything.

---

## 🖥️ Local Setup (optional)

If you want to generate PDFs on your own machine:

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later

### Install

```bash
cd pdf-converter
npm install
```

### Convert a specific file

```bash
# from inside pdf-converter/
npm run convert -- ../notes/ajp.md
```

The PDF is saved to `notes/output/ajp.pdf` (a sibling `output/` folder next to the source `.md` file).

### Convert all notes at once

```bash
# from inside pdf-converter/
npm run convert:all -- ../notes
```