# 🌍 GeoDoc — Analisis Karakteristik Tanah Aluvial

> Laporan Praktikum Geografi digital oleh Kelompok 2 Kelas X-11 SMAN 1 Cilamaya  
> Bimbingan: Ibu Yumi Sasmita, S.Pd.

![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-live-success)

---

## 📡 Live Demo

**URL:** [https://tanah-aluvial-kelompok2-x11.vercel.app](https://tanah-aluvial-kelompok2-x11.vercel.app)

---

## 📖 Tentang Proyek

GeoDoc adalah website dokumentasi interaktif untuk laporan praktikum geografi yang membahas analisis karakteristik tanah aluvial di Empang Muarabaru, Cilamaya Wetan, Kabupaten Karawang, Jawa Barat. Website ini menampilkan data lapangan, peta digital interaktif dengan 5 zona aluvial, dan dokumentasi visual dari penelitian.

### Fitur Utama

- 🗺️ **Peta Interaktif** — Leaflet.js dengan 5 zona sebaran aluvial, 10 titik sampel, dan aliran Sungai Cilamaya
- 📊 **Data Karakteristik** — Tabel tekstur, warna, struktur, konsistensi, dan kandungan hara tanah
- 📸 **Dokumentasi Visual** — Foto lokasi, sampel tanah, dan foto kelompok di lapangan
- 📱 **Responsive Design** — Desktop navigation bar + mobile bottom navigation
- 🔍 **SEO Optimized** — JSON-LD structured data, Open Graph, Twitter Cards, sitemap
- ♿ **Accessible** — Skip navigation, ARIA labels, focus-visible styles, keyboard navigable
- 🔒 **Secure** — CSP, HSTS, X-Frame-Options headers

---

## 🛠️ Tech Stack

| Teknologi | Fungsi |
|---|---|
| **HTML5** | Struktur halaman semantik |
| **Tailwind CSS** (CDN) | Utility-first styling |
| **Font Awesome 6.5.1** | Ikon UI |
| **Leaflet.js 1.9.4** | Peta interaktif OpenStreetMap |
| **Plus Jakarta Sans** | Tipografi utama |
| **Vercel** | Hosting & deployment |

---

## 📂 Struktur Proyek

```
geografi/
├── index.html                  # Redirect ke public/index.html
├── package.json                # Konfigurasi npm & scripts
├── vercel.json                 # Konfigurasi Vercel (routes, headers, CSP)
├── SUMMARY.md                  # Dokumentasi perubahan & future plan
├── README.md                   # File ini
└── public/                     # Static assets (root deployment)
    ├── index.html              # Halaman utama
    ├── 404.html                # Halaman error 404
    ├── favicon.svg             # Favicon SVG (globe + soil layers)
    ├── site.webmanifest        # PWA manifest
    ├── robots.txt              # Crawler directives
    ├── sitemap.xml             # XML sitemap untuk search engines
    ├── lokasi utama.png        # Foto lokasi penelitian
    ├── diagram tanah aluvial.jpeg  # Diagram struktur tanah
    ├── foto sampel tanah.jpeg  # Foto sampel tanah aluvial
    └── foto anggota bersama.jpeg   # Foto kelompok di lapangan
```

---

## 🚀 Quick Start

### Prasyarat

- [Node.js](https://nodejs.org/) v16+ (opsional, hanya untuk dev server)

### Instalasi

```bash
# Clone repository
git clone <repo-url>
cd geografi

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Website akan tersedia di `http://localhost:3000`

### Build & Deploy

Proyek ini adalah static site — tidak ada build step yang diperlukan. Semua file di folder `public/` langsung di-deploy.

```bash
# Deploy ke Vercel
npx vercel --prod
```

Atau hubungkan repository GitHub ke Vercel dashboard untuk auto-deploy.

---

## 🗺️ Data Penelitian

### Lokasi
| Parameter | Nilai |
|---|---|
| **Titik Sampel** | 6°12'09.5"S 107°36'08.7"E |
| **Desa** | Muarabaru |
| **Kecamatan** | Cilamaya Wetan |
| **Kabupaten** | Karawang |
| **Provinsi** | Jawa Barat |

### Karakteristik Tanah
| Parameter | Hasil |
|---|---|
| **Tekstur** | Lempung Berdebu |
| **Warna** | Kelabu Gelap |
| **Struktur** | Pejal |
| **Konsistensi** | Liat & Lengket |
| **Kandungan Hara** | Tinggi |

### 5 Zona Aluvial
1. 🔵 **Aluvial Pesisir Muarabaru** — Lempung berdebu, kelabu gelap
2. 🟣 **Aluvial Deltai Cilamaya** — Lempung liat berpasir, endapan delta
3. 🔵 **Aluvial Rendaman Pasang Surut** — Lempung liat berdebu, marin dominan
4. 🟢 **Aluvial Backswamp** — Liat berdebu, drainase buruk
5. 🟠 **Aluvial Lanau Sungai Cilamaya** — Lempung berlanau, endapan sungai

---

## 👥 Anggota Kelompok 2

| Nama | Inisial |
|---|---|
| Batara | B |
| Fahri | F |
| Nurul | N |
| Yulia | Y |
| Nike | N |
| Nazwa | N |

**Guru Pengajar:** Yumi Sasmita, S.Pd.  
**Sekolah:** SMAN 1 Cilamaya  
**Kelas:** X-11

---

## 🔒 Security Headers

Website dilengkapi security headers melalui [`vercel.json`](vercel.json):

| Header | Nilai |
|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Content-Security-Policy` | Full CSP dengan whitelist CDN |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(self)` |

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

## 📝 Changelog

Lihat [`SUMMARY.md`](SUMMARY.md) untuk dokumentasi lengkap perubahan yang sudah diterapkan dan rencana pengembangan ke depan.

---

<p align="center">
  <strong>GeoDoc.</strong> — Dokumentasi Praktikum Geografi SMAN 1 Cilamaya<br>
  <sub>© 2024–2026 Kelompok 2 Geografi SMAN 1 Cilamaya</sub>
</p>
