---
title: "Dasar Pemrograman C untuk Pemula"
date: 2026-01-24
draft: false
tags: ["tutorial", "c", "programming", "algorithms", "coding"]
categories: ["Programming", "Computer Science"]
author: "Acarya Wibawantra"
showToc: true
TocOpen: false
hidemeta: false
comments: false
description: "Panduan awal belajar bahasa pemrograman C, meliputi struktur dasar, variabel, tipe data, dan input/output."
canonicalURL: "https://acaryawibawantra.xyz/posts/dasar-pemrograman-c"
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
    alt: "C Programming Language"
    caption: "The Mother of All Languages"
    relative: false
    hidden: true
---

Bahasa C sering disebut sebagai "ibunya" bahasa pemrograman modern. Banyak bahasa populer saat ini seperti C++, Java, Python, dan JavaScript memiliki sintaks yang berakar dari C. Diciptakan oleh Dennis Ritchie pada tahun 1972 di Bell Labs, C tetap relevan hingga hari ini, terutama dalam pengembangan sistem operasi, embedded systems, dan aplikasi yang membutuhkan performa tinggi.

Belajar C adalah langkah yang sangat baik untuk memahami bagaimana komputer bekerja pada level yang lebih rendah (low-level).

## Struktur Dasar Program C

Setiap program C memiliki struktur dasar yang mirip. Mari kita lihat kode "Hello World" klasik:

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### Penjelasan:
1.  `#include <stdio.h>`: Ini adalah perintah *preprocessor* untuk menyertakan library **Standard Input Output**. Library ini berisi fungsi-fungsi dasar untuk input dan output, seperti `printf`.
2.  `int main()`: Ini adalah **fungsi utama**. Setiap program C bermula dari fungsi `main`.
3.  `{ ... }`: Kurung kurawal menandai **blok kode** yang akan dieksekusi.
4.  `printf("Hello, World!\n");`: Fungsi untuk mencetak teks ke layar. `\n` adalah karakter *newline* (baris baru).
5.  `return 0;`: Mengembalikan nilai 0 ke sistem operasi, yang menandakan bahwa program berjalan sukses tanpa error.

## Variabel dan Tipe Data

Dalam C, kita harus mendeklarasikan tipe data variabel sebelum menggunakannya. Beberapa tipe data dasar:

*   `int`: Bilangan bulat (contoh: 10, -5, 100)
*   `float`: Bilangan desimal (contoh: 3.14, 2.5)
*   `char`: Karakter tunggal (contoh: 'A', 'z')

```c
int umur = 20;
float tinggi = 175.5;
char inisial = 'A';
```

## Input dan Output

Interaksi dengan pengguna sangat penting. Kita menggunakan `printf` untuk output dan `scanf` untuk input.

### Contoh Program Sederhana: Menghitung Luas Persegi Panjang

Mari kita buat program yang meminta pengguna memasukkan panjang dan lebar, lalu menghitung luasnya.

```c
#include <stdio.h>

int main() {
    int panjang, lebar, luas;

    // Meminta input dari pengguna
    printf("Masukkan panjang: ");
    scanf("%d", &panjang); // %d digunakan untuk membaca integer

    printf("Masukkan lebar: ");
    scanf("%d", &lebar);

    // Menghitung luas
    luas = panjang * lebar;

    // Menampilkan hasil
    printf("Luas persegi panjang adalah: %d\n", luas);

    return 0;
}
```

### Catatan Penting tentang `scanf`:
Perhatikan simbol `&` sebelum nama variabel di `scanf` (contoh: `&panjang`). Simbol ini berarti "alamat memori". `scanf` membutuhkan alamat memori variabel untuk menyimpan nilai yang diinputkan pengguna.

## Kesimpulan

Bahasa C mungkin terlihat sedikit lebih kaku dibandingkan bahasa modern seperti Python, tetapi kedisiplinan yang diajarkannya (seperti tipe data statis dan manajemen memori) sangat berharga. Dengan menguasai C, Anda akan memiliki fondasi logika pemrograman yang sangat kuat.

Selamat mencoba kode pertama Anda!
