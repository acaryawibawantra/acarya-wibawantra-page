---
title: "Modul 1.2: Cascading Style Sheets (CSS)"
date: 2026-03-11
weight: 2
description: "Mempelajari bagaimana memberikan gaya dan tata letak pada halaman web menggunakan CSS."
categories: ["Web Development", "GDGOC ITS"]
tags: ["html", "css", "javascript", "gdgoc"]
showToc: true
TocOpen: false
---

# 4. CSS (Cascading Style Sheets)

Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

## What is CSS?

Like HTML, CSS is not a programming language. It's not a markup language either. CSS is a style sheet language. CSS is what you use to selectively style HTML elements.

## Basic CSS Syntax

CSS follows a simple syntax of selectors and declarations.

**Syntax Structure:**

```css
selector {
  property: value;
}
```

- Selector: Targets the HTML element(s) to style.
- Property: Defines the style aspect to modify (e.g., color, font-size).
- Value: Specifies the value for the property.

**Example:**

```css
h1 {
  color: blue;
  font-size: 2em;
  text-align: center;
}
```

## Ways to Add CSS to HTML

1. **Inline CSS**

   CSS directly inside an HTML element using the `style` attribute.

   ```html
   <p style="color: red; font-weight: bold;">This is inline CSS.</p>
   ```

2. **Internal CSS**

   CSS written inside a `<style>` tag within the <head> section of the HTML document.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Internal CSS</title>
       <style>
         body {
           background-color: lightgray;
         }
         p {
           color: green;
           font-size: 16px;
         }
       </style>
     </head>
     <body>
       <p>This is styled using internal CSS.</p>
     </body>
   </html>
   ```

3. **External CSS**

   CSS written in a separate file and linked to the HTML document.

   `index.html`

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>External CSS</title>
       <link rel="stylesheet" href="styles.css" />
     </head>
     <body>
       <p>This is styled using external CSS.</p>
     </body>
   </html>
   ```

   `styles.css`

   ```css
   body {
     background-color: #f0f0f0;
   }
   p {
     color: navy;
     font-family: Arial, sans-serif;
   }
   ```

## CSS Selectors

- **Element Selector**: Targets elements by tag name.

  Example:

  ```css
  p {
    color: red;
  }
  ```

- **Class Selector**: Targets elements by class name

  Example:
  `index.html`

  ```html
  <div class="container">Hello</div>
  ```

  `styles.css`

  ```css
  .container {
    padding: 20px;
    background-color: yellow;
  }
  ```

- **ID Selector**: Targets an element by its unique ID.

  Example:
  `index.html`

  ```html
  <div id="main-content">Content</div>
  ```

  `styles.css`

  ```css
  #main-content {
    font-size: 18px;
    color: black;
  }
  ```

- **Group Selector**: Targets multiple elements

  Example:

  ```css
  h1,
  p {
    margin: 10px;
  }
  ```

---

## The Box Model

Salah satu konsep terpenting dalam CSS adalah **Box Model**. Setiap elemen di HTML pada dasarnya adalah sebuah "kotak". Box model menentukan seberapa besar ruang yang diambil kotak tersebut.

Box Model terdiri dari (dari dalam ke luar):
1. **Content**: Isi sebenarnya dari elemen (teks, gambar).
2. **Padding**: Ruang kosong transparan di antara konten dan border (di *dalam* elemen).
3. **Border**: Garis tepi yang mengelilingi padding dan konten.
4. **Margin**: Ruang kosong transparan di luar border (jarak antar elemen).

**Contoh:**
```css
div {
  width: 300px;         /* Lebar konten */
  padding: 20px;        /* Jarak ke dalam */
  border: 5px solid black; /* Garis tepi */
  margin: 15px;         /* Jarak ke elemen lain di luar */
}
```

---

## Layout Modern: Flexbox

Sebelum ada Flexbox, menempatkan elemen bersebelahan atau di tengah sangatlah sulit. **Flexbox (Flexible Box)** mengubah cara kita menyusun layout menjadi jauh lebih mudah, biasanya digunakan untuk layout 1 dimensi (baris atau kolom).

Untuk menggunakan Flexbox, kita harus memberikan property `display: flex;` pada elemen induk (container).

**Contoh Sederhana:**
```html
<div class="container">
  <div class="item">Satu</div>
  <div class="item">Dua</div>
  <div class="item">Tiga</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between; /* Mengatur jarak horizontal */
  align-items: center;            /* Mengatur perataan vertikal */
  gap: 10px;                      /* Jarak antar item */
}
```

---

## Responsive Design (Media Queries)

Di era sekarang, website harus terlihat bagus di HP, Tablet, maupun Laptop. CSS **Media Queries** memungkinkan kita menetapkan *style* yang berbeda-beda tergantung pada ukuran layar perangkat.

**Sintaks Dasar:**
```css
/* Style default (misal untuk HP / Mobile First) */
body {
  font-size: 14px;
}
.container {
  display: block; /* Menumpuk ke bawah di HP */
}

/* Jika lebar layar minimal 768px (Tablet / Desktop) */
@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
  .container {
    display: flex; /* Bersebelahan di layar lebar */
  }
}
```

---

More about CSS:

- https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content
- https://css-tricks.com/
- https://www.w3schools.com/cssref/index.php