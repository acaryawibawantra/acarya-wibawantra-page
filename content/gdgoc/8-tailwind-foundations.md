---
title: "Modul 2.4: Tailwind CSS Foundations"
date: 2026-04-16
weight: 8
description: "Memahami pendekatan utility-first CSS dengan Tailwind untuk styling yang cepat dan konsisten bersama React/Next.js."
categories: ["Web Development", "GDGOC ITS"]
tags: ["tailwind", "css", "styling", "react", "nextjs", "gdgoc"]
showToc: true
TocOpen: false
---

# Modul 2.4 – Tailwind CSS Foundations

Pada modul ini, kamu akan belajar:
- Apa itu **Tailwind CSS** dan pendekatan *utility-first* yang dibawanya.
- Perbedaan mendasar antara CSS biasa vs Tailwind.
- Cara kerja Tailwind di dalam project Next.js.
- Kenapa Tailwind sangat populer di ekosistem web modern.

---

## 1. Permasalahan Styling CSS Biasa di Project Besar

Di Modul 1 kita sudah belajar CSS biasa. Cara ini bekerja dengan baik untuk project kecil, tapi saat project membesar:

- File CSS bisa menjadi **sangat panjang** dan susah di-navigate.
- Nama class bisa **bertabrakan** (misalnya dua developer pakai nama `.card` untuk hal yang berbeda).
- Seringkali muncul CSS yang **tidak terpakai** dan membebani ukuran file.
- Susah memastikan **konsistensi** warna, spacing, dan ukuran font di seluruh aplikasi.

Di sinilah Tailwind CSS menawarkan solusi berbeda.

---

## 2. Apa Itu Tailwind CSS?

> **Tailwind CSS adalah framework CSS berbasis utility-first yang memungkinkan kita membangun tampilan langsung di dalam HTML/JSX menggunakan class-class kecil yang sudah siap pakai.**

Dibanding menulis CSS sendiri di file `.css`, dengan Tailwind kita langsung menambahkan class ke elemen HTML.

**CSS Biasa:**

```css
/* style.css */
.tombol {
  background-color: #3b82f6;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
}
```

```html
<button class="tombol">Daftar Sekarang</button>
```

**Dengan Tailwind:**

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded-md font-bold">
  Daftar Sekarang
</button>
```

Semua styling dilakukan **langsung di elemen** menggunakan class-class utility Tailwind.

---

## 3. Konsep Utility-First

*Utility-first* artinya setiap class CSS hanya melakukan **satu hal kecil** (satu utilitas):

| Class Tailwind | Artinya |
|---|---|
| `bg-blue-500` | background-color: biru (shade 500) |
| `text-white` | color: white |
| `px-4` | padding kiri & kanan: 16px |
| `py-2` | padding atas & bawah: 8px |
| `rounded-md` | border-radius: 6px |
| `font-bold` | font-weight: 700 |
| `text-xl` | font-size: 1.25rem |
| `flex` | display: flex |
| `gap-4` | gap: 16px |
| `hover:bg-blue-600` | saat hover: background lebih gelap |

Kita **kombinasikan** class-class kecil itu untuk membangun tampilan yang diinginkan.

---

## 4. Sistem Desain Bawaan Tailwind

Tailwind hadir dengan **sistem desain yang sudah terstandarisasi**, sehingga:

- Warna sudah punya shade yang konsisten (50, 100, 200, ..., 900).
- Spacing menggunakan skala yang seragam (1 = 4px, 2 = 8px, 4 = 16px, dst).
- Ukuran font dan border-radius juga sudah terstandar.

Contoh palet warna Tailwind:

```html
<!-- Berbagai shade biru -->
<div class="bg-blue-100">Sangat terang</div>
<div class="bg-blue-500">Sedang (standar)</div>
<div class="bg-blue-900">Sangat gelap</div>
```

Ini membantu tim untuk selalu **konsisten** dalam pemilihan warna dan ukuran, tanpa harus ingat nilai hex atau px secara manual.

---

## 5. Responsive Design dengan Tailwind

Tailwind memiliki *breakpoint prefix* bawaan untuk membuat desain responsif:

| Prefix | Breakpoint |
|---|---|
| (tanpa prefix) | Mobile (< 640px) |
| `sm:` | ≥ 640px |
| `md:` | ≥ 768px |
| `lg:` | ≥ 1024px |
| `xl:` | ≥ 1280px |

Contoh:

```html
<!-- Di mobile: 1 kolom. Di layar md ke atas: 3 kolom -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

---

## 6. Tailwind di Dalam React / Next.js

Tailwind sangat cocok dipakai bersama React dan Next.js karena:

- Tidak perlu buat file CSS terpisah untuk tiap komponen.
- Class Tailwind langsung ditulis di dalam JSX.
- Komponen tetap bisa dibuat reusable.

Contoh komponen React dengan Tailwind:

```jsx
function CardEvent({ title, date, location }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-blue-600 mb-2">{title}</h2>
      <p className="text-gray-500 text-sm">{date}</p>
      <p className="text-gray-700 mt-1">{location}</p>
    </div>
  );
}
```

---

## 7. Kelebihan dan Kekurangan Tailwind

**Kelebihan:**

- ✅ Tidak perlu berpindah antara file HTML/JSX dan file CSS.
- ✅ Sistem desain yang konsisten dan terstandar.
- ✅ File CSS produksi sangat kecil (hanya class yang terpakai yang di-include).
- ✅ Responsive design jadi mudah dengan prefix breakpoint.
- ✅ Ekosistem besar: banyak template, komponen, dan integrasi.

**Kekurangan:**

- ❌ Awalnya class di HTML bisa terasa **panjang dan ramai**.
- ❌ Butuh waktu untuk **hafal nama class** Tailwind.
- ❌ Kurang cocok untuk proyek yang membutuhkan styling yang sangat kustom dan unik.

---

## 8. Tailwind dalam Konteks Workshop Ini

Dalam konteks Web Modern Workshop ini:

- Tailwind dipakai **bersama Next.js** untuk mempercepat proses styling.
- Kamu tidak perlu hafal semua class Tailwind sekarang — bisa sambil belajar dan lookup dokumentasi.
- Yang penting dipahami dulu: **konsep utility-first** dan mengapa pendekatan ini populer.

> "Tailwind tidak menggantikan kemampuan CSS dasarmu — justru ia membuat CSS dasarmu lebih berguna karena kamu tahu *apa* yang dilakukan setiap class."

---

Referensi lebih lanjut:

- https://tailwindcss.com/docs
- https://tailwindcss.com/docs/utility-first
- https://play.tailwindcss.com/ (coba Tailwind langsung di browser!)
