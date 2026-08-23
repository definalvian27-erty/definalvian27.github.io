# Chicken Geprek NR — Website

Website preview menu Chicken Geprek NR, order via WhatsApp, dan section lokasi
yang langsung buka Google Maps.

## Struktur folder

```
chicken-geprek-nr/
├── server.js           # Server Express (static file server, siap dikembangin)
├── package.json
└── public/
    ├── index.html       # Struktur halaman
    ├── style.css        # Semua styling
    ├── script.js        # Data menu, tombol WA, dan section Maps
    └── images/          # Taruh foto menu di sini
```

## Cara menjalankan di laptop (lokal)

1. Install [Node.js](https://nodejs.org) (versi 18 ke atas) kalau belum ada.
2. Buka terminal di folder ini, lalu jalankan:
   ```
   npm install
   npm start
   ```
3. Buka browser ke `http://localhost:3000`.

## Cara deploy supaya bisa diakses orang lain (online)

- **Render** (render.com) — gratis, nggak perlu kartu kredit. Bikin "Web Service"
  baru, Build Command `npm install`, Start Command `npm start`. Catatan: server
  gratis "tidur" kalau nggak diakses 15 menit, jadi request pertama agak lambat.
- **Railway** (railway.app) — deploy paling mulus, tapi sekarang butuh kartu
  kredit dan cuma dapet kredit gratis buat 30 hari pertama.

## Ganti menu, harga, atau nomor WhatsApp

Semua ada di `public/script.js`, bagian paling atas:

- `WA_NUMBER` — nomor WhatsApp tujuan order
- `menuItems` — daftar menu, harga, dan deskripsi singkat

## Pakai foto asli buat menu

1. Taruh file foto di folder `public/images/` (lihat `public/images/README.md`).
2. Buka `public/script.js`, cari `menuItems`, lalu isi field `image` dengan
   nama file fotonya, contoh:
   ```js
   { name:"Chicken Geprek", price:13000, image:"chicken-geprek.jpg", ... }
   ```
3. Kalau `image` dikosongkan (`null`), website otomatis pakai ikon ilustrasi.

## Ganti lokasi di section Maps

Buka `public/script.js`, cari bagian atas:

```js
const MAPS_QUERY = "Cibanteng, Bogor, Jawa Barat"; // dipakai buat cari lokasi & buka Maps
const MAPS_DISPLAY_NAME = "Chicken Geprek NR";      // nama yang ditampilkan
const MAPS_DISPLAY_ADDRESS = "Cibanteng, Bogor, Jawa Barat"; // alamat yang ditampilkan
```

Ganti `MAPS_QUERY` dan `MAPS_DISPLAY_ADDRESS` dengan alamat asli toko —
peta dan tombol "Buka di Maps" otomatis ikut berubah. Kalau punya link Google
Maps sendiri (hasil "Bagikan" dari app Maps), alamat teks biasa juga cukup,
nggak perlu koordinat.

## Soal fitur komentar/testimoni

Fitur ini sudah dilepas dan diganti section Maps sesuai permintaan. Kalau nanti
mau ditambah lagi (baik versi sederhana atau versi dengan backend + database),
tinggal bilang aja.
