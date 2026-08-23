const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Belum ada fitur komentar lagi (diganti section Maps).
// Kalau nanti mau nambah fitur backend lain (misal form pesan langsung,
// notifikasi order, dsb), tinggal tambahin route API di sini, contoh:
//
// app.post("/api/order", (req, res) => {
//   // proses data order dari req.body
//   res.json({ ok: true });
// });

app.listen(PORT, () => {
  console.log(`Chicken Geprek NR server jalan di http://localhost:${PORT}`);
});
