const express = require("express");
const rateLimit = require("express-rate-limit");
const path = require("path");
const fs = require("fs");
const { CSS, convertFile } = require("./convert-to-pdf");

const app = express();
const NOTES_DIR = path.resolve(__dirname, "..", "notes");
const OUTPUT_DIR = path.join(NOTES_DIR, "output");

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(express.json({ limit: "10mb" }));
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  next();
});
app.use("/api", apiLimiter);
app.use(express.static(path.join(__dirname, "public")));

/**
 * Validate filename to prevent path traversal and restrict to .md files.
 */
function sanitizeFilename(name) {
  if (typeof name !== "string") return null;
  const base = path.basename(name);
  if (
    base !== name ||
    !base.endsWith(".md") ||
    base.startsWith(".") ||
    !/^[a-zA-Z0-9][a-zA-Z0-9 ._-]*\.md$/.test(base)
  ) {
    return null;
  }
  return base;
}

// ── File listing ──
app.get("/api/files", (_req, res) => {
  try {
    const files = fs
      .readdirSync(NOTES_DIR)
      .filter((f) => f.endsWith(".md"))
      .sort()
      .map((f) => {
        const stats = fs.statSync(path.join(NOTES_DIR, f));
        return { name: f, size: stats.size, modified: stats.mtime };
      });
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: "Failed to list files" });
  }
});

// ── Read file ──
app.get("/api/files/:name", (req, res) => {
  const name = sanitizeFilename(req.params.name);
  if (!name) return res.status(400).json({ error: "Invalid filename" });

  const filePath = path.join(NOTES_DIR, name);
  if (!fs.existsSync(filePath))
    return res.status(404).json({ error: "File not found" });

  res.json({ name, content: fs.readFileSync(filePath, "utf-8") });
});

// ── Save file ──
app.put("/api/files/:name", (req, res) => {
  const name = sanitizeFilename(req.params.name);
  if (!name) return res.status(400).json({ error: "Invalid filename" });

  const { content } = req.body;
  if (typeof content !== "string")
    return res.status(400).json({ error: "Content must be a string" });

  fs.writeFileSync(path.join(NOTES_DIR, name), content, "utf-8");
  res.json({ success: true, name });
});

// ── Create file ──
app.post("/api/files", (req, res) => {
  const name = sanitizeFilename(req.body.name);
  if (!name) return res.status(400).json({ error: "Invalid filename" });

  const filePath = path.join(NOTES_DIR, name);
  if (fs.existsSync(filePath))
    return res.status(409).json({ error: "File already exists" });

  const title = name.replace(/\.md$/, "").replace(/[-_]/g, " ");
  fs.writeFileSync(filePath, `# ${title}\n\nStart writing here...\n`, "utf-8");
  res.json({ success: true, name });
});

// ── Delete file ──
app.delete("/api/files/:name", (req, res) => {
  const name = sanitizeFilename(req.params.name);
  if (!name) return res.status(400).json({ error: "Invalid filename" });

  const filePath = path.join(NOTES_DIR, name);
  if (!fs.existsSync(filePath))
    return res.status(404).json({ error: "File not found" });

  fs.unlinkSync(filePath);
  res.json({ success: true });
});

// ── Export to PDF ──
app.post("/api/export/:name", async (req, res) => {
  const name = sanitizeFilename(req.params.name);
  if (!name) return res.status(400).json({ error: "Invalid filename" });

  const filePath = path.join(NOTES_DIR, name);
  if (!fs.existsSync(filePath))
    return res.status(404).json({ error: "File not found" });

  try {
    await convertFile(filePath);
    const pdfName = name.replace(/\.md$/, ".pdf");
    res.json({ success: true, pdf: pdfName });
  } catch (err) {
    res.status(500).json({ error: "PDF conversion failed: " + err.message });
  }
});

// ── Download PDF ──
app.get("/api/pdf/:name", (req, res) => {
  const name = path.basename(req.params.name);
  if (!name.endsWith(".pdf") || !/^[a-zA-Z0-9][a-zA-Z0-9._-]*\.pdf$/.test(name))
    return res.status(400).json({ error: "Invalid PDF filename" });

  const pdfPath = path.join(OUTPUT_DIR, name);
  if (!fs.existsSync(pdfPath))
    return res.status(404).json({ error: "PDF not found" });

  res.download(pdfPath);
});

// ── Preview CSS (same as PDF output) ──
app.get("/api/css", (_req, res) => {
  res.type("text/css").send(CSS);
});

// ── Serve marked.js from node_modules ──
app.get("/vendor/marked.min.js", (_req, res) => {
  res.sendFile(path.join(__dirname, "node_modules", "marked", "marked.min.js"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n  📝  Notes Editor`);
  console.log(`  ─────────────────────────────────────`);
  console.log(`  Local:   http://localhost:${PORT}`);
  console.log(`  Notes:   ${NOTES_DIR}\n`);
});
