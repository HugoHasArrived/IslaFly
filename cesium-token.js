export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const token = process.env.CESIUM_ION_TOKEN;
  if (!token) return res.status(500).json({ error: "CESIUM_ION_TOKEN is missing in Vercel Environment Variables." });
  // Browser Cesium requests require this public read-only token. Restrict scopes and allowed URLs in Cesium ion.
  return res.status(200).json({ token });
}
