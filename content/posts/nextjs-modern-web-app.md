---
title: "Building a Modern Web App with Next.js and TypeScript"
date: 2025-12-15
draft: false
tags: ["nextjs", "typescript", "react", "web-development", "tutorial"]
author: "Acarya Wibawantra"
summary: "A comprehensive guide to building modern, production-ready web applications using Next.js 14, TypeScript, and best practices"
---

# Building a Modern Web App with Next.js and TypeScript

As a full-stack developer, I've worked with various frameworks, but **Next.js** has become my go-to choice for building modern web applications. In this tutorial, I'll share my experience and best practices for building production-ready apps.

## 🎯 Why Next.js?

Next.js offers several advantages that make it perfect for modern web development:

- **Server-Side Rendering (SSR)** - Better SEO and initial load performance
- **API Routes** - Build your backend alongside your frontend
- **File-based Routing** - Intuitive and simple routing system
- **TypeScript Support** - First-class TypeScript integration
- **Image Optimization** - Built-in image optimization
- **Built-in CSS Support** - Support for CSS Modules, Tailwind, and more

---

## 🚀 Getting Started

### Prerequisites

Before we begin, make sure you have:
- Node.js 18+ installed
- Basic knowledge of React and TypeScript
- A code editor (VS Code recommended)

### Project Setup

```bash
# Create a new Next.js project with TypeScript
npx create-next-app@latest my-app --typescript --tailwind --app

# Navigate to project directory
cd my-app

# Install additional dependencies
npm install axios zod react-hook-form
```

---

## 📁 Project Structure

Here's the structure I use for most projects:

```
my-app/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   └── users/
│   │       └── route.ts
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   └── shared/
│       └── Navbar.tsx
├── lib/
│   ├── utils.ts
│   └── validators.ts
├── types/
│   └── index.ts
└── public/
    └── images/
```

---

## 🎨 Building Components with TypeScript

Let's create a reusable Button component with proper TypeScript typing:

```typescript
// components/ui/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'rounded-lg font-medium transition-colors';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    outline: 'border-2 border-blue-600 hover:bg-blue-50 text-blue-600',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
```

---

## 🔌 Creating API Routes

Next.js makes it easy to create API endpoints:

```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = userSchema.parse(body);
    
    // Process the data (e.g., save to database)
    // const user = await prisma.user.create({ data: validatedData });
    
    return NextResponse.json(
      { success: true, data: validatedData },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

## 📝 Form Handling with React Hook Form

Here's a complete form implementation:

```typescript
// components/ContactForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-2">Name</label>
        <input
          {...register('name')}
          className="w-full px-4 py-2 border rounded-lg"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2">Email</label>
        <input
          {...register('email')}
          type="email"
          className="w-full px-4 py-2 border rounded-lg"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2">Message</label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  );
};
```

---

## 🎯 Best Practices

### 1. **Type Safety**
Always define proper TypeScript types/interfaces for your data:

```typescript
// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
```

### 2. **Environment Variables**
Use `.env.local` for sensitive data:

```bash
# .env.local
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_API_URL="https://api.example.com"
```

### 3. **Loading States**
Always provide feedback for async operations:

```typescript
const [isLoading, setIsLoading] = useState(false);

const fetchData = async () => {
  setIsLoading(true);
  try {
    const data = await api.getData();
    setData(data);
  } finally {
    setIsLoading(false);
  }
};
```

### 4. **Error Handling**
Implement proper error boundaries and try-catch blocks.

---

## 🚀 Performance Optimization

### Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
  placeholder="blur"
/>
```

### Code Splitting

```typescript
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
```

---

## 📊 Conclusion

Next.js with TypeScript provides a robust foundation for building modern web applications. Key takeaways:

- ✅ Use TypeScript for type safety
- ✅ Leverage Next.js features (SSR, API Routes, Image Optimization)
- ✅ Implement proper error handling
- ✅ Follow best practices for performance
- ✅ Keep components reusable and well-typed

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)

Happy coding! 🚀
