# Daftar Pemenang LKS Tingkat Wilayah

Aplikasi web berbasis Google Apps Script untuk menampilkan dan mengelola data pemenang LKS (Lomba Kompetensi Siswa) tingkat wilayah.

## Struktur Proyek

```
├── Code.gs      # Backend Google Apps Script (fungsi server-side)
├── index.html   # Frontend HTML/CSS/JavaScript
└── README.md    # Dokumentasi penggunaan
```

## Cara Penggunaan

### 1. Persiapan Spreadsheet

Buat Google Spreadsheet dengan struktur kolom berikut di baris pertama (header):

| Kolom | Nama Header    | Deskripsi           |
|-------|----------------|---------------------|
| A     | NIS            | Nomor Induk Siswa   |
| B     | NamaSiswa      | Nama lengkap siswa  |
| C     | NamaSekolah    | Nama sekolah asal   |
| D     | BidangLomba    | Bidang lomba yang diikuti |
| E     | Wilayah        | Wilayah kompetisi  |

> **Catatan:** Baris pertama WAJIB berisi header. Data dimulai dari baris kedua.

### 2. Menghubungkan ke Apps Script

1. Buka Google Spreadsheet Anda
2. Klik **Extensions** → **Apps Script**
3. Jika ada file `Code.gs` sudah ada, replace isinya
4. Buat file baru `index.html` dan paste isi file `index.html` dari proyek ini
5. Pada `Code.gs`, ganti nilai `spreadsheetId` dengan ID dari Spreadsheet Anda:
   ```javascript
   var spreadsheetId = "MASUKKAN_ID_SPREADSHEET_ANDA_DISINI";
   ```
   Cara mendapatkan ID Spreadsheet: buka URL Spreadsheet, ID ada di antara `/d/` dan `/edit`

### 3. Men-deploy Aplikasi Web

1. Di editor Apps Script, klik **Deploy** → **New deployment**
2. Klik ⚙️ (gear icon) di sebelah "Select type" → pilih **Web app**
3. Isi konfigurasi:
   - **Description:** Daftar Pemenang LKS
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Klik **Deploy**
5. Copy URL web app yang diberikan

### 4. Menggunakan Aplikasi

#### Melihat Data Pemenang
- Buka URL web app untuk melihat daftar pemenang dalam bentuk tabel
- Data diambil langsung dari Google Spreadsheet

#### Menambah Data Pemenang Baru
1. Klik tombol **Tambah Pemenang** di halaman utama
2. Isi formulir modal:
   - **NIS** - Nomor Induk Siswa
   - **Nama Siswa** - Nama lengkap
   - **Nama Sekolah** - Asal sekolah
   - **Bidang Lomba** - Kompetisi yang diikuti
   - **Wilayah** - Wilayah kompetisi
3. Klik **Simpan** untuk menyimpan data ke Spreadsheet

## Endpoint API (Functions)

| Fungsi         | Deskripsi                          | Parameter              |
|----------------|------------------------------------|------------------------|
| `doGet()`      | Render halaman web app            | `e` (event object)     |
| `getWinnersData()` | Mengambil semua data pemenang  | -                      |
| `addWinner(data)` | Menambah data pemenang baru    | `data` (object)        |

## Kolom Data

Proyek ini erwart columns dalam urutan:
1. NIS
2. NamaSiswa
3. NamaSekolah
4. BidangLomba
5. Wilayah

## Perubahan Terbaru (Changelog)

- **Premium UI & UX:** Desain antarmuka modern yang lebih elegan dengan kombinasi warna (Putih, Oranye, Hitam), tipografi menarik (Google Fonts: Outfit & Inter), dan micro-animation interaktif.
- **Welcome Modal Eksklusif:** Popup selamat datang informatif berisi jadwal pelaksanaan lomba, cakupan kompetensi, link kisi-kisi teknis, serta tautan menuju Grup WA Koordinasi.
- **Dashboard Statistik Real-time:** Menampilkan ringkasan (summary) data di bagian atas tabel, meliputi total peserta, jumlah asal sekolah, dan sebaran wilayah peserta.
- **Pencarian Instan (Live Search):** Fitur filter data cerdas dan interaktif yang memudahkan pencarian siswa berdasarkan nama, sekolah, atau wilayah.
- **Custom Footer:** Tambahan credit footer `@2026 Shop Master Create with love` dengan ikon ♥ beranimasi.

## Teknologi

- **Backend:** Google Apps Script
- **Frontend:** HTML5, CSS3, JavaScript vanilla
- **Font:** Google Fonts (Outfit, Inter)
- **Data Storage:** Google Spreadsheet

## Lisensi

MIT License