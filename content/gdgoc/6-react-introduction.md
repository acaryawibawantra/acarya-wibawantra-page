---
title: "Modul 2.2: Pengenalan React"
date: 2026-04-16
weight: 6
description: "Mengenal React sebagai library UI berbasis komponen yang menjadi fondasi ekosistem web modern."
categories: ["Web Development", "GDGOC ITS"]
tags: ["react", "component", "props", "state", "gdgoc"]
showToc: true
TocOpen: false
---

# Modul 2.2 – Pengenalan React

Pada modul ini, kamu akan belajar:
- Apa itu **React** dan kenapa React sangat populer di dunia web development.
- Konsep dasar **komponen** (component) dalam membangun UI.
- Gambaran tentang **props** dan **state** secara konsep (tanpa masuk terlalu dalam ke detail teknis).
- Bagaimana React dipakai di project nyata dan hubungannya dengan Next.js.

---

## 1. Kenapa Butuh React?

Di modul sebelumnya, kita sudah melihat bahwa:

- HTML dipakai untuk menyusun struktur halaman.
- CSS untuk styling.
- JavaScript untuk menambahkan interaktivitas.

Kalau aplikasi web yang kita buat masih **kecil dan sederhana**, cara ini sudah cukup.

Tapi ketika aplikasi mulai tumbuh:

- Banyak bagian UI yang **berulang** (card, button, navbar, footer, form, dll).
- Kita mulai ingin **mengubah tampilan berdasarkan data** (misalnya: jumlah item di keranjang, status login, daftar produk, dll).
- Mengelola **DOM secara manual** dengan JavaScript (pakai `document.querySelector`, `innerHTML`, dll) menjadi:
  - Mudah salah,
  - Sulit di-maintain,
  - Sulit di-scale.

Kita butuh cara:

- Mengorganisir UI dalam **bagian-bagian kecil yang bisa digunakan ulang**.
- Menghubungkan tampilan dengan **data** secara lebih rapi.

Di sinilah **React** masuk.

---

## 2. Apa Itu React?

> **React adalah library JavaScript untuk membangun user interface (UI).**

Beberapa poin penting:

- React fokus pada **UI** (tampilan).
- React membantu kita membangun UI menggunakan **komponen**.
- React tidak menggantikan HTML/CSS/JS, tetapi memberikan **cara baru untuk mengorganisir** ketiganya.

React dibuat oleh Facebook (sekarang Meta) dan digunakan di banyak produk besar, misalnya:

- Facebook
- Instagram
- WhatsApp Web
- Dan banyak aplikasi web modern lainnya

---

## 3. Cara Berpikir Komponen (Component-Based)

Konsep paling penting di React adalah **component**.

> **Komponen adalah "potongan UI" yang berdiri sendiri dan bisa digunakan ulang.**

Contoh komponen di sebuah website:

- Navbar
- Footer
- Card produk
- Tombol (Button)
- Input form

Di HTML biasa, kita mungkin akan:

- Menyalin blok `<div class="card">...</div>` berkali-kali.
- Kalau ada perubahan, kita harus mengubah di banyak tempat.

Di React, kita bisa:

- Membuat **satu komponen `Card`**, lalu memakainya berkali-kali dengan data yang berbeda.

Secara konsep, bedanya:

- HTML biasa → copy-paste struktur yang sama berkali-kali.
- React → definisikan satu komponen, lalu **re-use**.

Contoh konseptual komponen React:

```jsx
// Mendefinisikan komponen Card sekali saja
function CardEvent({ title, date, location }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{location}</p>
    </div>
  );
}

// Menggunakan komponen yang sama berkali-kali dengan data berbeda
function App() {
  return (
    <div>
      <CardEvent title="Web Workshop" date="20 April 2026" location="Online" />
      <CardEvent title="AI Seminar" date="25 April 2026" location="Gedung TC ITS" />
    </div>
  );
}
```

---

## 4. Props dan State (Gambaran Konseptual)

Untuk mengatur data dalam komponen, React punya dua konsep penting: **props** dan **state**.

### 4.1. Props

> **Props adalah data yang dikirim ke komponen dari luar.**

Bayangkan kamu punya komponen `CardEvent`, lalu kamu kirim:

- `title`
- `date`
- `location`

Setiap kali kamu memanggil `CardEvent` dengan props berbeda, tampilan card-nya bisa berbeda, walau komponen dasarnya sama.

Analoginya:

> Props seperti **parameter** ketika kamu memanggil fungsi.

```jsx
// Props dikirim seperti atribut HTML
<CardEvent title="Web Workshop" date="20 April 2026" />
```

### 4.2. State

> **State adalah data internal di dalam sebuah komponen yang bisa berubah.**

Contoh:

- Jumlah item di keranjang belanja.
- Status "sudah diklik" atau "belum" pada sebuah tombol.
- Nilai input form yang sedang diketik user.

Ketika **state berubah**, React akan **merender ulang** bagian UI yang perlu diperbarui, sehingga tampilan selalu sesuai dengan data terbaru.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state awal = 0

  return (
    <div>
      <p>Kamu sudah klik {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik saya</button>
    </div>
  );
}
```

---

## 5. React di Project Nyata

Di dunia industri, React:

- Dipakai untuk membangun aplikasi web yang **interaktif** dan **kompleks**.
- Memiliki **ekosistem besar**:
  - Router (misalnya React Router),
  - State management (Redux, Zustand, dsb),
  - UI library (MUI, Chakra UI, dll).

Banyak framework modern dibangun di atas React, salah satunya yang akan kita bahas adalah **Next.js**.

---

## 6. Hubungan React dengan Materi Berikutnya

Di modul selanjutnya (Modul 2.3), kita akan melihat:

- Bagaimana **Next.js** menggunakan React di dalamnya.
- Bagaimana Next.js menambahkan:
  - Routing otomatis,
  - Struktur folder yang jelas,
  - Fitur tambahan seperti server-side rendering dan lainnya.

Untuk sekarang, cukup pahami dulu bahwa:

- **React** = library untuk membangun UI dengan komponen.
- **Next.js** = framework yang menggunakan React di dalamnya dan menambahkan banyak fitur untuk membangun aplikasi web modern.

Saat kamu melihat kode Next.js nanti, ingatlah:
> "Di balik semua ini, kita sebenarnya sedang menulis **komponen React**."

---

Referensi lebih lanjut:

- https://react.dev/
- https://react.dev/learn/thinking-in-react
