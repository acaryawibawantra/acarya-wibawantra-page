---
title: "Modul 1.1: Web Foundations & HTML"
date: 2026-03-11
weight: 1
description: "Pengenalan cara kerja website, tools yang dibutuhkan, serta dasar HTML."
categories: ["Web Development", "GDGOC ITS"]
tags: ["html", "css", "javascript", "gdgoc"]
showToc: true
TocOpen: false
---

# 1. Introduction

## How Website Works ?

Computers connected to the internet are called clients and servers. A simplified diagram of how they interact might look like this:

![alt text](/images/web-foundations/image-1.png)

Clients are the typical web user's internet-connected devices (for example, your computer connected to your Wi-Fi, or your phone connected to your mobile network) and web-accessing software available on those devices (usually a web browser like Firefox or Chrome).

Servers are computers that store webpages, sites, or apps. When a client device wants to access a webpage, a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser.

![alt text](/images/web-foundations/image.png)

1. Every client and server have an ip address on internet
2. When client go to www.example.com, client will create dns query to determine what server ip
3. Client send request to server with ip from dns query
4. Server send response to client, the web browser will render html,css,js file from server

# 2. Web Development Tools

## Web Development Tools:

- **Text Editors / IDE**: [Visual Studio Code](https://code.visualstudio.com/), [Cursor](https://www.cursor.com/), [WebStorm](https://www.jetbrains.com/webstorm/).
- **Browsers**: Chrome, Firefox, Edge.
- **Version Control System**: Git.

## Hosting Providers:

- GitHub Pages, Netlify, Vercel, AWS, dll.

# 3. HTML (HyperText Markup Language)

## What is HTML?

HTML (HyperText Markup Language) is a markup language that tells web browsers how to structure the web pages you visit. It can be as complicated or as simple as the web developer wants it to be. HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of content to make it appear or act in a certain way. The enclosing tags can make content into a hyperlink to connect to another page, italicize words, and so on.

## Anatomy of an HTML element

![alt text](/images/web-foundations/image-2.png)

- **The opening tag**: This consists of the name of the element (in this example, p for paragraph), wrapped in opening and closing angle brackets. This opening tag marks where the element begins or starts to take effect. In this example, it precedes the start of the paragraph text.
- **The content**: This is the content of the element. In this example, it is the paragraph text.
- **The closing tag**: This is the same as the opening tag, except that it includes a forward slash before the element name. This marks where the element ends. Failing to include a closing tag is a common beginner error that can produce peculiar results.

## Nesting elements

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

In the example above, we opened the p element first, then opened the strong element. For proper nesting, we should close the strong element first, before closing the p.

## Void elements

Not all elements follow the pattern of an opening tag, content, and a closing tag. Some elements consist of a single tag, which is typically used to insert/embed something in the document. Such elements are called void elements. For example, the `<img>` element embeds an image file onto a page:

```html
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" alt="Firefox icon" />
```

## Elemen Fundamental (Tags)

### 1. Text Formatting

- `<h1>` hingga `<h6>` : Digunakan untuk judul (heading). `<h1>` adalah yang paling penting/besar.
- `<p>` : Paragraf untuk teks panjang.
- `<strong>` / `<b>` : Teks tebal (bold).
- `<em>` / `<i>` : Teks miring (italic).

### 2. Links & Images
Menggunakan atribut untuk mengarahkan atau mengambil sumber:
- `<a>` (Anchor) : Membuat tautan/link. Atribut `href` berisi URL tujuan.
  ```html
  <a href="https://google.com">Pergi ke Google</a>
  ```
- `<img>` : Menampilkan gambar. Atribut `src` untuk sumber file, dan `alt` untuk teks alternatif.

### 3. Lists (Daftar)

- **Unordered List (`<ul>`)**: Daftar dengan simbol (bullet points).
- **Ordered List (`<ol>`)**: Daftar dengan angka yang berurutan.
- **List Item (`<li>`)**: Item di dalam daftar.

```html
<ul>
  <li>Apel</li>
  <li>Jeruk</li>
</ul>

<ol>
  <li>Langkah pertama</li>
  <li>Langkah kedua</li>
</ol>
```

## Formulir (Forms)

Formulir digunakan untuk menerima masukan (input) dari pengguna, misalnya untuk form login, kontak, atau registrasi.

```html
<form action="/submit-data" method="POST">
  <!-- Label untuk kejelasan input -->
  <label for="nama">Nama Lengkap:</label>
  <input type="text" id="nama" name="nama" placeholder="Masukkan nama Anda">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <!-- Tombol Submit -->
  <button type="submit">Kirim Data</button>
</form>
```
Beberapa `type` pada `<input>` yang sering digunakan: `text`, `email`, `password`, `number`, `checkbox`, `radio`.

---

## Semantic HTML

Semantic HTML berarti menggunakan tag HTML yang maknanya jelas mendeskripsikan tujuan dari elemen tersebut. Hal ini sangat penting untuk **Aksesibilitas** (membantu screen reader) dan **SEO** (Search Engine Optimization).

Jangan gunakan `<div>` untuk _semua_ hal. Berikut adalah tag semantic yang direkomendasikan:

- `<header>` : Bagian atas (biasanya berisi logo & navigasi utama).
- `<nav>` : Blok navigasi / deretan menu link.
- `<main>` : Konten utama dan unik dari sebuah halaman.
- `<article>` : Konten mandiri (seperti postingan blog, berita).
- `<section>` : Bagian-bagian dalam dokumen (biasanya diawali judul).
- `<footer>` : Bagian bawah (hak cipta, link tambahan).

**Contoh Struktur Semantic:**
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Semantic</title>
</head>
<body>
    
    <header>
        <h1>Logo GDGOC</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    </header>

    <main>
        <section>
            <h2>Selamat Datang</h2>
            <p>Ini adalah konten utama website kami.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 GDGOC ITS. All rights reserved.</p>
    </footer>

</body>
</html>
```

---

More about HTML :

- https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content
- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://www.w3schools.com/html/