// ================= KONFIGURASI =================
const WA_NUMBER = "6285697031273";
const BIZ_NAME = "Chicken Geprek NR";

// Lokasi buat section Maps - GANTI TEXT DI BAWAH INI kalau alamatnya udah fix.
// Bisa diisi nama tempat ("Cibanteng, Bogor") atau alamat lengkap.
const MAPS_QUERY = "Geprek NR, Jl. Cihideung, Pasar Rebo, Bogor";
const MAPS_DISPLAY_NAME = "Chicken Geprek NR";
const MAPS_DISPLAY_ADDRESS = "Jl. Cihideung, Pasar Rebo, Bogor"; // sementara, ganti sesuai alamat asli

// Menu: kalau mau pakai foto asli, taruh file foto di folder /images
// lalu isi "image" dengan nama filenya, contoh: image: "chicken-geprek.jpg"
// Kalau "image" dibiarkan null, website otomatis pakai ikon ilustrasi.
const menuItems = [
  { name:"Chicken Geprek", price:13000, image:"ayam1.jpg", icon:"drumstick", desc:"Ayam krispi digeprek sambel dadakan.", note:null },
  { name:"Chicken Spicy", price:13000, image:"ayam2.jpg", icon:"chili", desc:"Versi pedas buat yang doyan nampol.", note:null },
  { name:"Chicken Original", price:10000, image:"ayam3.jpg", icon:"drumstick", desc:"Ayam krispi tanpa sambel, gurih polos.", note:null },
  { name:"Ayam Goreng Bawang Putih", price:15000, image:"ayam4.jpg", icon:"garlic", desc:"Aroma bawang putih kuat, gurih maksimal.", note:null },
  { name:"Paket Spicy + Nasi", price:16000, image:"ayam5.jpg", icon:"rice", desc:"Chicken Spicy lengkap sama nasi hangat.", note:"Paket" },
  { name:"Paket Geprek + Nasi", price:16000, image:"ayam6.jpg", icon:"rice", desc:"Chicken Geprek lengkap sama nasi hangat.", note:"Paket" },
  { name:"Cireng Chili Oil", price:5000, image:"ayam7.jpg", icon:"cireng", desc:"Cireng renyah siram chili oil pedas gurih.", note:"Min. order" },
  { name:"Cireng Mini", price:1000, image:"ayam8.jpg", icon:"cireng", desc:"Cireng ukuran mini, cocok buat cemilan.", note:null },
];

// ================= IKON (dipakai kalau menu belum punya foto) =================
const icons = {
  drumstick: '<svg viewBox="0 0 24 24" fill="none"><path d="M14 4c2 0 4 2 4 4.5 0 1.7-1 3-2.3 3.9L20 17l-3 3-4.6-4.3c-.9 1.3-2.2 2.3-3.9 2.3C6.2 18 4 15.8 4 13s2.2-5 5-5c.7 0 1.3.1 1.9.4C11.4 6 12.5 4 14 4z" stroke="#C1272D" stroke-width="1.5" stroke-linejoin="round"/><circle cx="8.5" cy="13" r="1.2" fill="#C1272D"/></svg>',
  chili: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 3c2 0 3 1.5 3 1.5S13 3 15 3" stroke="#5C7A2E" stroke-width="1.5" stroke-linecap="round"/><path d="M9.5 5.5c-3 1-5.5 4.5-5 8.5.4 3.2 3 6 6.5 6 4.5 0 8-4 8-9 0-2.8-1.4-4.8-3-5.5-1 2-2.2 2.5-3.5 2-1-.4-2-1.3-3-2z" fill="#C1272D" stroke="#7A1519" stroke-width="1.2"/></svg>',
  garlic: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3c1 1.5.5 2.5-.5 3.5C13 6 14.5 7 15 9c2 1 3 3.3 3 5.5 0 3.6-2.7 6.5-6 6.5s-6-2.9-6-6.5C6 12.3 7 10 9 9c.5-2 2-3 3.5-2.5C11.5 5.5 11 4.5 12 3z" stroke="#F5B942" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 9v11" stroke="#F5B942" stroke-width="1.2"/></svg>',
  rice: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 13c0-4 3-8 7-8s7 4 7 8" stroke="#C1272D" stroke-width="1.5" stroke-linecap="round"/><path d="M4 13h16l-1.5 6a2 2 0 0 1-2 1.6H7.5a2 2 0 0 1-2-1.6L4 13z" fill="#FCE9C9" stroke="#7A1519" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  cireng: '<svg viewBox="0 0 24 24" fill="none"><ellipse cx="9" cy="9" rx="4" ry="3" fill="#F5B942" stroke="#7A1519" stroke-width="1.3"/><ellipse cx="15" cy="14" rx="4" ry="3" fill="#F5B942" stroke="#7A1519" stroke-width="1.3"/><ellipse cx="8" cy="16" rx="3.2" ry="2.4" fill="#F5B942" stroke="#7A1519" stroke-width="1.3"/></svg>',
};

// ================= HELPER =================
function formatRupiah(n){ return "Rp " + n.toLocaleString("id-ID"); }

function waLink(itemName){
  const text = `Halo ${BIZ_NAME}, saya mau pesan: ${itemName}. Untuk berapa porsi ya kak?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
function generalWaLink(){
  const text = `Halo ${BIZ_NAME}, saya mau order 😋`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ================= TOMBOL WA =================
document.getElementById("navCta").href = generalWaLink();
document.getElementById("heroWaBtn").href = generalWaLink();
document.getElementById("ctaWaBtn").href = generalWaLink();

// ================= RENDER MENU =================
const grid = document.getElementById("menuGrid");
menuItems.forEach(item=>{
  const card = document.createElement("div");
  card.className = "card";
  const art = item.image
    ? `<img src="images/${item.image}" alt="${item.name}">`
    : icons[item.icon];
  card.innerHTML = `
    <div class="card-art">
      ${item.note ? `<span class="badge">${item.note}</span>` : ""}
      ${art}
    </div>
    <div class="card-body">
      <div class="card-title">${item.name}</div>
      <div class="card-desc">${item.desc}</div>
      <div class="card-foot">
        <div class="price">${formatRupiah(item.price)}</div>
        <a class="order-mini" href="${waLink(item.name)}" target="_blank" rel="noopener" aria-label="Pesan ${item.name} via WhatsApp">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.11-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
        </a>
      </div>
    </div>
  `;
  grid.appendChild(card);
});

// ================= SECTION MAPS =================
// Tap/klik kartu map -> otomatis buka Google Maps (app kalau di HP, tab baru kalau di desktop)
const mapsSearchLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const mapsEmbedLink = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;

document.getElementById("mapCard").href = mapsSearchLink;
document.getElementById("mapEmbed").src = mapsEmbedLink;
document.getElementById("mapTitle").textContent = MAPS_DISPLAY_NAME;
document.getElementById("mapAddress").textContent = MAPS_DISPLAY_ADDRESS;
