# 📄 Generated PDFs

This folder contains PDF versions of the Markdown notes in [`notes/`](../).

## How PDFs are generated

The GitHub Actions workflow [**Convert Markdown to PDF**](../../actions/workflows/convert-to-pdf.yml) runs automatically whenever a `.md` file in `notes/` is pushed to `main`.  
It converts the changed file(s) to PDF and commits the result here — no manual steps required.

## How to download a PDF

1. Click the file you want (e.g. [`ajp.pdf`](ajp.pdf)).
2. Click the **Download** button (or the ⬇ icon at the top-right of the file viewer).

## Regenerating all PDFs at once

If you want to rebuild every PDF (e.g. after a style change), go to the  
[**Actions → Convert Markdown to PDF**](../../actions/workflows/convert-to-pdf.yml) page and click **Run workflow**.

## Files in this folder

| PDF | Source Markdown |
|-----|----------------|
| `ajp.pdf` | [`../ajp.md`](../ajp.md) |
| `ajp12.pdf` | [`../ajp12.md`](../ajp12.md) |
| `pme.pdf` | [`../pme.md`](../pme.md) |
| `pme12.pdf` | [`../pme12.md`](../pme12.md) |
