---
title: "Integrasi Form Registrasi Balistung: WhatsApp & Google Spreadsheet"
date: 2026-01-27
draft: false
tags: ["web-development", "balistung", "react", "nextjs", "whatsapp-integration", "google-sheets"]
author: "Acarya Wibawantra"
summary: "Perjalanan mengintegrasikan form registrasi situs les Balistung dengan WhatsApp Admin dan backup data otomatis ke Google Spreadsheet."
---

# Integrasi Form Registrasi Balistung: WhatsApp & Google Spreadsheet

Halo semuanya! Kali ini saya ingin berbagi cerita tentang salah satu fitur krusial yang baru saja saya selesaikan untuk website **Balistung**—sebuah platform layanan les baca, tulis, dan hitung.

Salah satu tantangan utama dalam membangun situs layanan adalah bagaimana cara menangani pendaftaran siswa secara efisien tanpa harus membangun sistem backend yang kompleks di awal. Solusinya? Integrasi langsung ke **WhatsApp Admin** dan backup data otomatis ke **Google Spreadsheet**.

## Mengapa WhatsApp dan Spreadsheet?

Ada dua alasan utama pemilihan metode ini:
1. **Kecepatan Respon**: Admin mendapatkan notifikasi instan melalui WhatsApp, sehingga bisa langsung membalas calon orang tua siswa (fast response).
2. **Manajemen Data**: Semua data yang masuk tersimpan rapi di Google Spreadsheet sebagai database cadangan untuk keperluan administrasi dan rekapitulasi di masa mendatang.

## Implementasi Teknis

Untuk bagian frontend, saya menggunakan React/Next.js. Alur kerjanya cukup sederhana: saat pengguna menekan tombol submit, data akan dikirim ke Google Apps Script (sebagai jembatan ke Spreadsheet) via Fetch API, kemudian secara otomatis membuka tab WhatsApp dengan pesan yang sudah terformat.

Berikut adalah cuplikan kode integrasi yang saya gunakan:

```typescript
// Kirim data ke Google Spreadsheet
try {
    const spreadsheetUrl = 'https://script.google.com/macros/s/AKfycbz_rgsTYhrqGSM2ZTvLDVN5cTOrmowrAQu97l93G72VHERU8iqiZWH_33QbFs0T7Ng/exec';

    const response = await fetch(spreadsheetUrl, {
        method: 'POST',
        mode: 'no-cors', // Penting untuk Google Apps Script
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            parentName: formData.parentName,
            whatsappNumber: formData.whatsappNumber,
            studentName: formData.studentName,
            studentAge: formData.studentAge,
            currentGrade: gradeLabels[formData.currentGrade] || formData.currentGrade,
            programChoice: programLabels[formData.programChoice] || formData.programChoice
        })
    });

    console.log('Data berhasil dikirim ke spreadsheet');
} catch (error) {
    console.error('Error mengirim ke spreadsheet:', error);
}

// Membuat pesan WhatsApp yang terformat
const message = `*PENDAFTARAN SISWA BARU BALISTUNG*

*Data Orang Tua*
Nama: ${formData.parentName}
WhatsApp: ${formData.whatsappNumber}

*Data Anak*
Nama: ${formData.studentName}
Usia: ${formData.studentAge}
Kelas Saat Ini: ${gradeLabels[formData.currentGrade] || formData.currentGrade}

*Program yang Dipilih*
${programLabels[formData.programChoice] || formData.programChoice}

---
Saya tertarik untuk mendaftarkan anak saya. Mohon informasi lebih lanjut mengenai jadwal dan biaya. Terima kasih!`;

// Encode pesan untuk URL
const encodedMessage = encodeURIComponent(message);
const adminWhatsApp = '628xxxxxxxxxx'; // Nomor Admin
const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`;

// Buka WhatsApp di tab baru
window.open(whatsappUrl, '_blank');
```

## Hasil Akhir

Setelah diimplementasikan, data akan masuk ke Google Spreadsheet seperti berikut:

![Database Google Spreadsheet Balistung](/images/balistung-spreadsheet.png)

Dan Admin akan menerima pesan dengan format yang sangat rapi di WhatsApp:

![Format Pesan WhatsApp Balistung](/images/balistung-whatsapp.png)

## Penutup

Integrasi ini membuktikan bahwa kita tidak selalu butuh database server yang kompleks untuk memulai sebuah layanan. Dengan memanfaatkan alat yang sudah ada seperti Google Sheets dan WhatsApp API, kita bisa menciptakan alur kerja yang profesional dan efisien baik bagi user maupun admin.

Semoga bermanfaat bagi teman-teman yang sedang membangun fitur serupa! 🚀
