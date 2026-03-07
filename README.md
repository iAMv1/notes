# notes

## Download as PDF

Convert any markdown file in this repository to a styled PDF.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)

### Setup

```bash
npm install
```

### Usage

Convert a specific file:

```bash
npm run convert -- ajp.md
```

Convert all markdown files:

```bash
npm run convert:all
```

PDFs are saved to the `output/` directory.