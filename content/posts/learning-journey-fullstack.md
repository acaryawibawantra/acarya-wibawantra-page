---
title: "My Journey to Full-Stack Development: From Zero to Building Real Products"
date: 2025-11-20
draft: false
tags: ["learning", "journey", "career", "student-life", "advice"]
author: "Acarya Wibawantra"
summary: "My personal journey learning full-stack development as an Informatics Engineering student at ITS - the struggles, breakthroughs, and lessons learned"
---

# My Journey to Full-Stack Development

## 👋 Introduction

Hi! I'm Acarya, a student at Institut Teknologi Sepuluh Nopember (ITS) Surabaya. This is my story of how I went from barely understanding HTML to building full-stack web applications that people actually use.

If you're a student feeling overwhelmed by the vast world of programming, this post is for you.

---

## 🎬 The Beginning: My First Steps into Coding

### Early Days: Middle School (SMP)

My coding journey actually started way before university. Back in middle school, I got curious about game development after playing many mobile games. I thought: "How hard can it be to make a simple game?"

**My First Project: FlappyBirth in Unity**

Following YouTube tutorials, I created my first game - a Flappy Bird clone I called **FlappyBirth** using Unity. It was:
- Simple tap-to-fly mechanics
- Basic collision detection  
- Endless scrolling obstacles

Was it revolutionary? No. Did it work? YES! And that feeling of seeing something I built actually run was incredible! 🎮

**Early Web Development**

From there, I got interested in websites. I started learning:
- **HTML** - Building the structure
- **CSS** - Making things look pretty (or at least trying to!)

I built simple static websites - personal pages, hobby project pages, nothing fancy. But every `<div>` that aligned correctly felt like a victory!

---

### University: Getting Serious (2024-2025)

When I entered **Informatics Engineering at ITS**, things got real. This is when I faced:

**First Real Programming: C++**

My first semester hit me hard with **C++**. This wasn't drag-and-drop Unity or simple HTML tags anymore. This was:
- Pointers and memory management
- Data structures (arrays, linked lists, trees)
- Algorithms and complex logic
- Object-Oriented Programming

```cpp
// My first "complex" C++ program
#include <iostream>
using namespace std;

class Student {
private:
    string name;
    double gpa;
public:
    Student(string n, double g) : name(n), gpa(g) {}
    void display() {
        cout << "Name: " << name << ", GPA: " << gpa << endl;
    }
};

int main() {
    Student s1("Acarya", 3.8);
    s1.display();
    return 0;
}
```

It was HARD. Really hard. But it taught me how to think logically and solve problems systematically.

**Database Fundamentals**

Alongside C++, I learned about **databases**:
- Relational database concepts
- SQL queries (SELECT, JOIN, WHERE)
- Normalization
- Entity-Relationship diagrams

```sql
-- My first SQL query that I was proud of
SELECT students.name, courses.title, grades.score
FROM students
JOIN enrollments ON students.id = enrollments.student_id
JOIN grades ON enrollments.id = grades.enrollment_id
JOIN courses ON enrollments.course_id = courses.id
WHERE grades.score >= 80
ORDER BY grades.score DESC;
```

Understanding how data is stored, retrieved, and managed was eye-opening. Suddenly, every website I visited made more sense!

---

### The Transition: From Desktop to Web Development

After getting comfortable with C++ and databases, I realized most modern applications are web-based. That's when I decided to:

1. **Revisit web development** - But this time with programming knowledge
2. **Learn JavaScript** - To make websites interactive
3. **Connect frontend to backend** - Understanding the full stack

This is where my real journey into **full-stack development** began...

---

## 📚 The Full-Stack Learning Path

### Phase 1: Modern JavaScript (3 months)

After learning C++, JavaScript felt both easier and weirder at the same time!

**What I Learned:**
```
JavaScript Basics → ES6+ Features → DOM Manipulation
```

**Key differences from C++:**
- No pointers! (thank god 😅)
- Dynamically typed (no `int`, `string` declarations)
- Asynchronous programming (callbacks, promises, async/await)
- Running in the browser, not terminal

**Resources that helped:**
- [freeCodeCamp](https://freecodecamp.org) - Free, structured curriculum
- [MDN Web Docs](https://developer.mozilla.org) - Best reference for web tech
- [JavaScript30](https://javascript30.com) - 30-day JS challenge

**"Aha!" Moment:**
Building my first **interactive to-do list**. Unlike my old static HTML pages, this one could add, delete, and update tasks dynamically!

```javascript
// From static HTML to dynamic JavaScript!
const addTask = () => {
  const task = document.getElementById('task-input').value;
  const li = document.createElement('li');
  li.textContent = task;
  
  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => li.remove();
  
  li.appendChild(deleteBtn);
  document.getElementById('task-list').appendChild(li);
};
```

Combining my HTML/CSS knowledge with JavaScript programming logic felt like unlocking a superpower! ✨

---

### Phase 2: React & Modern Frontend (4 months)

**The "JavaScript Fatigue" Phase**

I was overwhelmed by:
- React, Vue, or Angular?
- Webpack, Vite, or Parcel?
- npm or yarn?

**What I did:**
- Picked **React** (most popular, best resources)
- Focused on understanding **component-based thinking**
- Built 5+ small projects before moving on

**Projects that taught me the most:**
1. Weather App (API calls)
2. Movie Search (State management)
3. Shopping Cart (Props & lifting state)
4. Blog (React Router)
5. Dashboard (Charts & data visualization)

**Key Lesson:** 
> Don't framework-hop. Pick one, master it, then explore others.

---

### Phase 3: Backend Development (3 months)

**Concepts I struggled with:**
- Databases? SQL? NoSQL?
- APIs? REST? GraphQL?
- Authentication? JWT? Sessions?

**My approach:**
Started with **Node.js + Express**:

```javascript
// My first API endpoint
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
```

**Database Journey:**
1. Started with **MongoDB** (JSON-like, easier to grasp)
2. Learned **PostgreSQL** (relational, more powerful)
3. Discovered **Prisma** (game-changer for type safety!)

**Breakthrough Moment:**
When I finally understood how frontend talks to backend:

```
User clicks button → 
Frontend sends HTTP request → 
Backend processes → 
Database query → 
Response sent back → 
Frontend updates UI
```

This "click" moment changed everything!

---

### Phase 4: Full-Stack Integration (2 months)

**The "It's All Coming Together" Phase**

Built my first REAL project: **PasienGigi.id**

**Stack I chose:**
- **Next.js** (React + Backend in one)
- **TypeScript** (caught so many bugs!)
- **Prisma + PostgreSQL** (type-safe database)
- **Tailwind CSS** (rapid styling)

**Why this project worked:**
1. ✅ Solved a real problem (not a tutorial clone)
2. ✅ Had real users (my friends at dental school)
3. ✅ Forced me to learn deployment, debugging, scaling

---

## 💡 What I Wish I Knew Earlier

### 1. **Tutorial Hell is Real**

I spent months watching tutorials without building. **DON'T DO THIS!**

**Better approach:**
- Watch tutorial → Build something similar
- Try to add ONE new feature on your own
- Break things → Fix them → Learn

### 2. **Perfect Code Doesn't Exist**

My first projects were MESSY. And that's okay!

**Evolution of my code:**
```javascript
// Month 1 (works, but ugly)
function doStuff(x) {
  if (x > 0) {
    return true
  } else {
    return false
  }
}

// Month 6 (cleaner)
const isPositive = (x) => x > 0;

// Month 12 (typed, documented)
/**
 * Checks if a number is positive
 * @param {number} x - The number to check
 * @returns {boolean} True if positive, false otherwise
 */
const isPositive = (x: number): boolean => x > 0;
```

Progress, not perfection!

### 3. **Read Other People's Code**

GitHub is a goldmine:
- Browse popular repos
- Read how professionals structure code
- Learn design patterns organically

### 4. **Focus on Fundamentals, Not Trends**

Don't chase every new framework!

**Master these instead:**
- JavaScript fundamentals
- How HTTP works
- Database design
- Authentication basics
- Git/GitHub
- Problem-solving

Frameworks come and go. Fundamentals last.

---

## 🔧 Tools That Boosted My Productivity

### Development Tools
- **VS Code** + Extensions (ESLint, Prettier, GitLens)
- **Postman** (API testing)
- **Git** (version control)
- **Docker** (consistent environments)

### Learning Resources
- **Stack Overflow** (copy-paste is learning too! 😅)
- **Dev.to** (great articles)
- **YouTube** (Traversy Media, Fireship, Web Dev Simplified)
- **GitHub** (read real code)

### AI Tools (Yes, I use them!)
- **ChatGPT** (pair programming, debugging help)
- **GitHub Copilot** (code suggestions)
- **Cursor AI** (smart code editor)

**Hot take:** Using AI doesn't make you a bad developer. Not understanding the code it generates does.

---

## 🎯 Current Status & Goals

### Where I Am Now (January 2026)

**Skills:**
- ✅ Build full-stack web apps
- ✅ Deploy to production
- ✅ Work with databases
- ✅ API development
- ✅ TypeScript proficiency

**Real Projects:**
- [PasienGigi.id](https://pasiengigi.vercel.app) - 200+ active users
- Personal portfolio website
- Multiple client projects

### What I'm Learning Next

1. **System Design** - Building scalable applications
2. **DevOps** - CI/CD, Kubernetes, cloud platforms
3. **Mobile Development** - React Native
4. **AI/ML** - Integrating AI into web apps

---

## 💪 Tips for Fellow Students

### 1. **Build Projects, Not Résumés**

Instead of listing "Skills: React, Node.js, MongoDB"...

**Build:**
- E-commerce site
- Social media clone
- Task manager
- Portfolio site
- Blog platform

**Why?** Projects prove you can actually use those skills.

### 2. **Learn in Public**

- Write blog posts (like this!)
- Share your projects on Twitter/LinkedIn
- Contribute to open source
- Help others on Discord/Stack Overflow

**Benefits:**
- Builds your network
- Reinforces learning
- Creates opportunities

### 3. **Embrace the Struggle**

```javascript
while (struggling) {
  if (stuck > 30_minutes) {
    askForHelp();
  }
  
  keep_trying();
  
  if (solved) {
    celebrate();
    document_solution();
  }
}
```

Every developer struggles. The difference? They don't give up.

### 4. **Find Your Tribe**

Join communities:
- University coding clubs
- Online Discord servers
- Local tech meetups
- Hackathons

Code is more fun with friends!

---

## 🎓 Balancing Learning & University

**Real talk:** It's hard.

**My schedule (roughly):**
- 🌅 **Morning**: Classes
- 🌆 **Afternoon**: Assignments + Study
- 🌃 **Evening**: Coding projects (2-3 hours)
- 🌙 **Weekend**: Deeper dives into new topics

**Key:** Consistency > Intensity

Better to code 1 hour daily than 10 hours once a week.

---

## 🚀 The Future

I'm still learning. Every day.

**The beauty of tech:** There's always something new.

**My advice:**
- Start small
- Build consistently
- Share your journey
- Never stop learning

---

## 🤝 Let's Connect!

I'm always happy to chat with fellow students!

- **GitHub**: [github.com/acaryawibawantra](https://github.com/acaryawibawantra)
- **LinkedIn**: [My Profile](https://linkedin.com/in/i-dewa-nyoman-acarya-wibawantra-708159315/)
- **Email**: Found a bug in my blog? Let me know!

---

## 📖 Recommended Resources

### Free Quality Content
- [The Odin Project](https://theodinproject.com) - Full curriculum
- [Full Stack Open](https://fullstackopen.com) - Modern web dev
- [CS50](https://cs50.harvard.edu) - Computer science fundamentals

### YouTube Channels  
- Traversy Media
- Fireship
- Web Dev Simplified
- The Net Ninja

### Books Worth Reading
- "Eloquent JavaScript" by Marijn Haverbeke (free online!)
- "You Don't Know JS" series by Kyle Simpson
- "Clean Code" by Robert C. Martin

---

## 🎬 Final Thoughts

**If you're a beginner feeling lost:**

You're not behind. You're exactly where you need to be.

**If you're intermediate feeling stuck:**

Keep building. The plateau is where growth happens.

**If you're advanced helping others:**

Thank you. We all started somewhere.

---

*What's your learning journey? Drop me a message - I'd love to hear your story!*

**Keep coding, keep learning, keep building!** 🚀

---

*Last updated: January 2026*
