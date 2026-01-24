---
title: "Pengenalan Web Development: HTML, CSS, dan JavaScript"
date: 2026-01-24
draft: false
tags: ["tutorial", "web development", "html", "css", "javascript"]
categories: ["Programming", "Web"]
author: "Acarya Wibawantra"
showToc: true
TocOpen: false
hidemeta: false
comments: false
description: "Panduan lengkap untuk pemula memahami pondasi web development: HTML untuk struktur, CSS untuk gaya, dan JavaScript untuk interaksi."
canonicalURL: "https://acaryawibawantra.xyz/posts/html-css-javascript-introduction"
disableHLJS: true
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
cover:
    image: "<image path/url>" # Add image if available
    alt: "HTML CSS JS"
    caption: "The Holy Trinity of Web Development"
    relative: false
    hidden: true
---

Dunia web development mungkin terlihat rumit pada awalnya, dengan ribuan framework dan tools yang terus bermunculan. Namun, di balik semua teknologi canggih tersebut, ada tiga fondasi utama yang membangun hampir semua website yang kita lihat hari ini: **HTML**, **CSS**, dan **JavaScript**.

Jika Anda baru memulai perjalanan sebagai web developer, memahami ketiga teknologi ini adalah langkah pertama yang paling krusial.

Mari kita bayangkan sebuah **rumah**.

## 1. HTML (HyperText Markup Language): Struktur Bangunan

HTML adalah kerangka atau struktur dari website Anda. Bayangkan HTML sebagai **pondasi, dinding, dan atap** dari sebuah rumah. Tanpa ini, rumah tidak akan berdiri. HTML memberi tahu browser apa saja elemen yang ada di halaman: "Ini adalah judul", "Ini adalah paragraf", "Ini adalah gambar".

### Contoh Kode HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Halaman Pertamaku</title>
</head>
<body>
    <h1>Halo, Dunia!</h1>
    <p>Ini adalah paragraf pertama saya di website.</p>
    <button id="tombol-sapa">Klik Saya</button>
</body>
</html>
```

## 2. CSS (Cascading Style Sheets): Dekorasi dan Gaya

Jika HTML adalah dinding batu bata yang polos, CSS adalah **cat, tata letak interior, dan dekorasi** rumah tersebut. CSS membuat website terlihat cantik. Tanpa CSS, web hanya akan berupa teks hitam di latar belakang putih. CSS mengontrol warna, jenis huruf (font), posisi elemen, dan tata letak responsif.

### Contoh Kode CSS

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    text-align: center;
}

h1 {
    color: #2c3e50;
}

button {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9;
}
```

## 3. JavaScript: Kelistrikan dan Interaksi

Sekarang rumah kita sudah berdiri kokoh dan dicat dengan indah. Tapi, rumah itu masih belum "hidup". Pintu garasi tidak terbuka otomatis, lampu tidak menyala saat saklar ditekan. Di sinilah JavaScript berperan.

JavaScript adalah **sistem kelistrikan dan fungsionalitas** rumah. Ia membuat website menjadi interaktif. Dengan JavaScript, Anda bisa membuat animasi, memproses formulir, mengambil data dari server, atau mengubah konten halaman tanpa perlu reload.

### Contoh Kode JavaScript

```javascript
// Mengambil elemen tombol dari HTML
const tombol = document.getElementById('tombol-sapa');

// Menambahkan fungsi ketika tombol diklik
tombol.addEventListener('click', function() {
    alert('Halo! Terima kasih sudah mengklik tombol ini.');
    
    // Mengubah teks tombol setelah diklik
    this.textContent = "Sudah Diklik!";
    this.style.backgroundColor = "#27ae60";
});
```

## Kesimpulan

Ketiga teknologi ini bekerja secara harmonis:
1.  **HTML** menyediakan konten dan struktur.
2.  **CSS** memperindah tampilan konten tersebut.
3.  **JavaScript** membuat konten tersebut dapat berinteraksi dengan pengguna.

Menguasai dasarnya akan memberikan Anda landasan yang kuat untuk mempelajari teknologi yang lebih lanjut seperti React, Vue, atau Next.js. Selamat belajar!
