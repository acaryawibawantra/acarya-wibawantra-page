---
title: "Modul 1.4: Web Foundations Workshop (Study Case)"
date: 2026-03-16
weight: 4
description: "Praktik langsung membuat halaman Event Registration menggunakan HTML, CSS, dan JavaScript."
categories: ["Web Development", "GDGOC ITS"]
tags: ["html", "css", "javascript", "gdgoc", "workshop"]
showToc: true
TocOpen: false
---

# Web Foundations Workshop

Sebagai penutup modul Web Foundations, kita akan mempraktikkan semua yang telah dipelajari dengan membuat halaman **Event Registration** sederhana.

## Live Demo
Anda dapat melihat hasil akhir dari proyek ini secara interaktif di sini:
👉 **[Live Demo: Event Registration](/web-foundations-workshop/)**
- **Original Source:** [GITHUB](https://github.com/acaryawibawantra/Modul-Web-Development)


---

## 1. Structure (HTML)
File `index.html` mendefinisikan struktur dan konten halaman.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GDGoC ITS – Event Registration</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <header class="site-header">
        <h1>GDGoC ITS – Web Foundations Workshop</h1>
        <p class="tagline">
            Learn HTML, CSS, and JavaScript by building a real mini project.
        </p>
    </header>

    <main class="container">
        <section class="card">
            <h2>About the Event</h2>
            <p>
                In this session, we will learn web fundamentals and build a small
                event registration page using HTML, CSS, and JavaScript.
            </p>
        </section>

        <section class="card">
            <h2>Topics Covered</h2>
            <ul>
                <li>HTML: basic structure and semantic elements</li>
                <li>CSS: selectors, layout, and styling</li>
                <li>JavaScript: DOM, events, functions, and arrays</li>
            </ul>
        </section>

        <section class="card">
            <h2>Event Registration</h2>

            <form id="registration-form" class="form">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Enter your name" required />
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Enter your email" required />
                </div>

                <div class="form-group">
                    <label for="level">Experience Level</label>
                    <select id="level" name="level">
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                <div class="form-group form-group-inline">
                    <label for="join-wa">
                        <input id="join-wa" name="join-wa" type="checkbox" />
                        Join WhatsApp group
                    </label>
                </div>

                <button type="submit" class="btn-primary">
                    Register
                </button>

                <p id="error-message" class="message error"></p>
                <p id="success-message" class="message success"></p>
            </form>
        </section>

        <section class="card">
            <h2>Registered Participants</h2>
            <ul id="participants-list" class="participants-list">
                <!-- Filled by JavaScript -->
            </ul>
        </section>
    </main>

    <footer class="site-footer">
        <p>Built for GDGoC ITS Web Foundations.</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
```

---

## 2. Styling (CSS)
File `style.css` memberikan tampilan visual, tata letak, dan responsivitas.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #4285f4;
    --hover-color: #3367d6;
    --bg-color: #f8f9fa;
    --text-color: #333;
    --card-bg: #ffffff;
    --border-radius: 8px;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.site-header {
    background-color: var(--primary-color);
    color: white;
    text-align: center;
    padding: 2rem 1rem;
    margin-bottom: 2rem;
}

.card {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    border-bottom: 2px solid #eee;
    padding-bottom: 0.5rem;
}

.form-group {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
}

.form-group-inline {
    flex-direction: row;
    align-items: center;
    gap: 8px;
}

input[type="text"],
input[type="email"],
select {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: var(--border-radius);
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: var(--hover-color);
}

.message {
    margin-top: 1rem;
    padding: 0.75rem;
    border-radius: var(--border-radius);
    display: none;
}

.error { background: #fee2e2; color: #b91c1c; }
.success { background: #d1fae5; color: #047857; }
```

---

## 3. Logic (JavaScript)
File `script.js` menangani interaksi pengguna dan manipulasi data secara dinamis.

```javascript
const participants = [];

const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const levelSelect = document.getElementById("level");
const waCheckbox = document.getElementById("join-wa");
const participantsList = document.getElementById("participants-list");
const errorEl = document.getElementById("error-message");
const successEl = document.getElementById("success-message");

function renderParticipants() {
    participantsList.innerHTML = "";
    for (const p of participants) {
        const li = document.createElement("li");
        li.textContent = `${p.name} - ${p.level} ${p.joinWA ? "(Join WA group)" : ""}`;
        participantsList.appendChild(li);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const level = levelSelect.value;
    const joinWA = waCheckbox.checked;

    if (!name || !email) {
        errorEl.textContent = "Name and email are required.";
        errorEl.style.display = "block";
        return;
    }

    errorEl.style.display = "none";
    participants.push({ name, email, level, joinWA });
    renderParticipants();
    form.reset();
    
    successEl.textContent = "Registration successful!";
    successEl.style.display = "block";
    setTimeout(() => successEl.style.display = "none", 3000);
});
```
