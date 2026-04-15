import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", version: "1.0.0", identity: "VoxVPN AI" });
  });

  // Simulated VPN Server List
  app.get("/api/servers", (req, res) => {
    res.json([
      { id: "us-east", name: "USA - New York", load: 45, latency: 22, status: "optimal", flag: "🇺🇸" },
      { id: "uk-lon", name: "UK - London", load: 62, latency: 15, status: "optimal", flag: "🇬🇧" },
      { id: "jp-tok", name: "Japan - Tokyo", load: 88, latency: 120, status: "high-load", flag: "🇯🇵" },
      { id: "de-fra", name: "Germany - Frankfurt", load: 30, latency: 10, status: "optimal", flag: "🇩🇪" },
      { id: "sg-sin", name: "Singapore", load: 55, latency: 85, status: "optimal", flag: "🇸🇬" },
    ]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`VoxVPN AI Server running on http://localhost:${PORT}`);
  });
}

startServer();
