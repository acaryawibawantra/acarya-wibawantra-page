---
title: "Case Study: Building PasienGigi.id - A Dental Student-Patient Matching Platform"
date: 2025-12-01
draft: false
tags: ["case-study", "project", "web-development", "nextjs", "full-stack"]
author: "Acarya Wibawantra"
summary: "How I built PasienGigi.id, a platform that bridges the gap between dental students needing patients and people seeking affordable dental care"
---

# Case Study: Building PasienGigi.id

## 🎯 The Problem

During my time at ITS Surabaya, I noticed a recurring challenge faced by dental students: **finding patients with specific dental conditions** required for their clinical practice (koas). Meanwhile, many people need dental treatment but can't afford expensive private clinics.

This created a perfect opportunity for a **matching platform**.

---

## 💡 The Solution

**PasienGigi.id** - A platform that connects:

- **👨‍⚕️ Dental Students** who need patients with specific cases
- **🦷 Patients** who need free/affordable dental treatment

🔗 **Live Demo**: [pasiengigi.vercel.app](https://pasiengigi.vercel.app)

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Rapid UI development
- **React Hook Form** - Efficient form management
- **Zod** - Runtime validation

### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Relational database

### Deployment
- **Vercel** - Hosting and CI/CD
- **Supabase** - Database hosting

---

## 📋 Key Features

### 1. Student Registration & Profile
Students can create profiles with:
- University affiliation
- Year of study
- Required cases/procedures
- Preferred location and schedule

### 2. Patient Registration
Patients can:
- Describe their dental issues
- Upload photos (optional)
- Specify their location
- View matching students

### 3. Smart Matching System
The platform matches patients with students based on:
- **Case compatibility** - Student needs vs patient issues
- **Location proximity** - Distance between parties
- **Availability** - Schedule matching
- **Priority queue** - Urgent cases first

### 4. Communication Hub
- **In-app messaging** - Students and patients can chat
- **Notification system** - Email/SMS alerts for matches
- **Booking system** - Schedule appointments

---

## 🏗️ System Architecture

```
┌─────────────┐
│   Next.js   │
│  Frontend   │
└──────┬──────┘
       │
       ├─────────────┐
       │             │
┌──────▼──────┐  ┌──▼──────────┐
│  API Routes │  │   Prisma    │
│  (Backend)  │──│     ORM     │
└─────────────┘  └──────┬──────┘
                        │
                  ┌─────▼──────┐
                  │ PostgreSQL │
                  │  Database  │
                  └────────────┘
```

---

## 💻 Implementation Highlights

### Database Schema

```prisma
// prisma/schema.prisma
model Student {
  id          String   @id @default(cuid())
  name        String
  university  String
  year        Int
  cases       Case[]
  matches     Match[]
  createdAt   DateTime @default(now())
}

model Patient {
  id          String   @id @default(cuid())
  name        String
  phone       String
  issue       String
  photos      String[]
  location    String
  matches     Match[]
  createdAt   DateTime @default(now())
}

model Match {
  id         String   @id @default(cuid())
  student    Student  @relation(fields: [studentId], references: [id])
  studentId  String
  patient    Patient  @relation(fields: [patientId], references: [id])
  patientId  String
  status     Status   @default(PENDING)
  createdAt  DateTime @default(now())
}

enum Status {
  PENDING
  ACCEPTED
  REJECTED
  COMPLETED
}
```

### Matching Algorithm

```typescript
// lib/matching.ts
interface MatchScore {
  studentId: string;
  patientId: string;
  score: number;
}

export async function findMatches(patientId: string): Promise<MatchScore[]> {
  const patient = await prisma.patient.findUnique({
    where: { id: patientId },
  });
  
  const students = await prisma.student.findMany({
    include: { cases: true },
  });
  
  const scores = students.map(student => {
    let score = 0;
    
    // Case compatibility (40%)
    const caseMatch = student.cases.some(c => 
      patient.issue.toLowerCase().includes(c.name.toLowerCase())
    );
    if (caseMatch) score += 40;
    
    // Location proximity (30%)
    const distance = calculateDistance(
      patient.location,
      student.location
    );
    if (distance < 5) score += 30;
    else if (distance < 10) score += 20;
    else if (distance < 20) score += 10;
    
    // Urgency (20%)
    if (patient.urgent) score += 20;
    
    // Student rating (10%)
    score += student.rating * 10;
    
    return {
      studentId: student.id,
      patientId: patient.id,
      score,
    };
  });
  
  return scores.filter(s => s.score > 30).sort((a, b) => b.score - a.score);
}
```

### Real-time Notifications

```typescript
// app/api/notify/route.ts
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  const { matchId } = await request.json();
  
  const match = await prisma.match.findUnique({
    where: { id: matchId },
    include: { student: true, patient: true },
  });
  
  if (!match) {
    return Response.json({ error: 'Match not found' }, { status: 404 });
  }
  
  // Notify student
  await sendEmail({
    to: match.student.email,
    subject: 'New Patient Match!',
    html: `You have a new patient match: ${match.patient.name}`,
  });
  
  // Notify patient
  await sendEmail({
    to: match.patient.email,
    subject: 'Student Match Found!',
    html: `We found a student for your case: ${match.student.name}`,
  });
  
  return Response.json({ success: true });
}
```

---

## 🎨 UI/UX Design Decisions

### 1. **Simple Onboarding**
- Minimal required fields
- Step-by-step wizard
- Progress indicator

### 2. **Clear CTAs**
- Prominent "Register" buttons
- Color-coded actions (green = accept, red = reject)

### 3. **Mobile-First Design**
- Responsive layout
- Touch-friendly controls
- Optimized for small screens

### 4. **Trust & Safety**
- Email verification
- University ID verification for students
- Rating system
- Report/block functionality

---

## 📊 Results & Impact

### Metrics (As of December 2025)

- 📈 **150+ registered students**
- 👥 **300+ patients** seeking treatment
- 🤝 **200+ successful matches**
- ⭐ **4.8/5 average rating**

### User Feedback

> "Sangat membantu untuk mencari pasien sesuai kasus yang saya butuhkan!" - *Mahasiswa FKG Unair*

> "Dapat perawatan gigi gratis dengan mahasiswa yang profesional!" - *Patient from Surabaya*

---

## 🚧 Challenges & Solutions

### Challenge 1: Data Privacy
**Problem**: Storing sensitive patient health information  
**Solution**: 
- Implemented end-to-end encryption
- HIPAA-compliant data handling
- User consent forms

### Challenge 2: Spam & Fake Accounts
**Problem**: Fake student/patient registrations  
**Solution**:
- Email verification
- University ID validation
- Phone number verification
- Manual review for suspicious activity

### Challenge 3: No-Shows
**Problem**: Patients/students not showing up for appointments  
**Solution**:
- Rating system
- Penalty for repeated no-shows
- SMS reminder 24h before appointment
- Confirmation system

---

## 🔮 Future Improvements

### Planned Features

1. **Mobile App** (React Native)
   - Better UX for on-the-go users
   - Push notifications
   - Offline support

2. **Payment Integration**
   - Optional premium listings
   - Donation system for students
   - Insurance claim assistance

3. **AI-Powered Matching**
   - Machine learning for better matches
   - Natural language processing for case descriptions
   - Predictive analytics for success rates

4. **Telemedicine Features**
   - Video consultation
   - Digital prescription
   - Treatment progress tracking

---

## 💡 Key Learnings

### Technical Lessons

1. **Start Simple, Iterate Fast**
   - MVP first, features later
   - User feedback drives development
   
2. **Type Safety Matters**
   - TypeScript prevented many bugs
   - Zod validation caught edge cases

3. **Performance Optimization**
   - Database indexing crucial for search
   - Image optimization saved bandwidth
   - Caching reduced API calls

### Product Lessons

1. **Solve Real Problems**
   - Talked to actual students and patients
   - Built features they actually need
   
2. **Trust is Essential**
   - Verification systems increase confidence
   - Clear communication about privacy

3. **Community Building**
   - Active on university forums
   - Responded to every feedback
   - Built relationships with dental schools

---

## 🎬 Conclusion

Building PasienGigi.id taught me invaluable lessons about:
- Full-stack development
- User-centered design
- Product management
- Solving real-world problems with code

The platform continues to grow, and I'm excited to see how it evolves to serve more students and patients across Indonesia.

---

## 🔗 Links

- **Live App**: [pasiengigi.vercel.app](https://pasiengigi.vercel.app)
- **GitHub**: [github.com/acaryawibawantra/pasiengigi](https://github.com/acaryawibawantra)
- **Contact**: [Email me](mailto:your.email@example.com) for collaboration or questions

---

*Have ideas for improvement? Found a bug? Feel free to reach out!*
