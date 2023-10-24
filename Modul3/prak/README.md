![Screanshoot](./src/Asset/React-App.png)

# Tugas Praktikum Modul 1 - Slicing Homepage menggunakan React.js

Ini adalah tugas praktikum Modul 1 yang telah diubah menggunakan React.js untuk membuat halaman Homepage, About, dan Contact, serta menambahkan komponen Navbar dan Footer.

## Struktur Proyek

```plaintext
my-react-app/
│
├── public/
│   ├── index.html
│   └── manifest.json 
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   └── Footer.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── Contact.js
│   └── ...
│
├── Style.css
│
├── package.json
├── package-lock.json
└── README.md
```

## Komponen

- **Navbar (Navbar.js)**: Komponen Navbar yang berisi menu navigasi dan logo.
- **Hero (Hero.js)**: Komponen Hero yang menampilkan judul dan teks selamat datang.
- **Footer (Footer.js)**: Komponen Footer yang berisi informasi kontak dan hak cipta.

## Halaman

- **Homepage (Home.js)**: Halaman utama dengan konten tampilan beranda.
- **About (About.js)**: Halaman tentang informasi.
- **Contact (Contact.js)**: Halaman kontak.

## Routing

Penggunaan React Router digunakan untuk melakukan routing antara halaman-halaman berikut:

- `/` - Halaman beranda (Homepage)
- `/about` - Halaman "About Us" (About)
- `/contact` - Halaman "Contact" (Contact)

## Cara Menjalankan Proyek

1. Pastikan Anda telah menginstal Node.js dan npm.
2. Salin repositori ini atau buat proyek React.js baru.
3. Buka terminal dan navigasikan ke direktori proyek.
4. Setelah selesai, jalankan proyek dengan perintah:

   ```bash
   npm start
   ```

5. Buka peramban Anda dan akses `http://localhost:3000` untuk melihat proyek.