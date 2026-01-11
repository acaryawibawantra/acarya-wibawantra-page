---
title: "Winning Best Participant at Schematic ITS Bootcamp: Building Kelarin with React & Golang"
date: 2025-10-25
draft: false
tags: ["bootcamp", "achievement", "golang", "react", "full-stack", "schematic-its"]
author: "Acarya Wibawantra"
summary: "My journey through Schematic ITS Advanced Bootcamp, building a full-stack to-do list application with React and Golang, and earning recognition as one of the best participants"
---

# Winning Best Participant at Schematic ITS Bootcamp

## 🎓 The Bootcamp Experience

In October 2025, I participated in the **Advanced Bootcamp** organized by **Schematic ITS** - one of the most prestigious tech student organizations at Institut Teknologi Sepuluh Nopember. Out of dozens of participants, I was honored to be recognized as **one of the best participants** for my final project.

This post is about my journey, the challenges I faced, and what I learned building a production-ready to-do list application from scratch.

---

## 🎯 The Challenge: Build Kelarin

### Project Overview

**Kelarin** is a full-stack task management application that helps users organize their daily tasks efficiently. The name comes from Indonesian slang meaning "get it done" - which perfectly captures the app's purpose!

**🔗 Live Project Links:**
- **Frontend Repository**: [kelarin-web](https://github.com/acaryawibawantra/kelarin-web)
- **Backend API Repository**: [kelarin-api](https://github.com/acaryawibawantra/kelarin-api)

### Requirements

The bootcamp challenged us to build a complete full-stack application with:
- ✅ RESTful API backend
- ✅ Interactive frontend
- ✅ User authentication
- ✅ CRUD operations
- ✅ Database integration
- ✅ Proper error handling
- ✅ Clean code architecture

---

## 🛠️ Tech Stack

### Frontend: React Ecosystem

```javascript
// Tech Stack
- React.js - UI library
- React Router - Navigation
- Axios - HTTP client
- Context API - State management
- CSS Modules - Styling
- React Hook Form - Form handling
```

**Why React?**
- Component-based architecture for reusability
- Large ecosystem and community
- Excellent developer experience
- Perfect for building interactive UIs

### Backend: Golang + PostgreSQL

```go
// Tech Stack
- Golang (Go) - Backend language
- Gin Framework - Web framework
- GORM - ORM for database
- PostgreSQL - Database
- JWT - Authentication
- bcrypt - Password hashing
```

**Why Golang?**
- **Performance** - Blazingly fast compiled language
- **Concurrency** - Built-in goroutines for concurrent operations
- **Type Safety** - Statically typed, catches errors at compile time
- **Simplicity** - Clean syntax, easy to maintain
- **Modern** - Great for building scalable APIs

---

## 🏗️ System Architecture

```
┌─────────────────┐
│   React App     │
│   (Frontend)    │
└────────┬────────┘
         │
         │ HTTP Requests
         │ (REST API)
         │
┌────────▼────────┐
│   Gin Server    │
│   (Golang)      │
└────────┬────────┘
         │
         │ SQL Queries
         │ (GORM)
         │
┌────────▼────────┐
│   PostgreSQL    │
│   (Database)    │
└─────────────────┘
```

---

## 💻 Implementation Highlights

### Backend: Golang API

#### 1. Project Structure

```
kelarin-api/
├── controllers/
│   ├── auth.go
│   ├── task.go
│   └── user.go
├── models/
│   ├── task.go
│   └── user.go
├── middleware/
│   └── auth.go
├── routes/
│   └── routes.go
├── database/
│   └── connection.go
├── utils/
│   └── jwt.go
└── main.go
```

#### 2. Database Models

```go
// models/task.go
package models

import (
    "time"
    "gorm.io/gorm"
)

type Task struct {
    ID          uint           `gorm:"primaryKey" json:"id"`
    Title       string         `gorm:"not null" json:"title"`
    Description string         `json:"description"`
    Status      string         `gorm:"default:'pending'" json:"status"` // pending, in-progress, completed
    Priority    string         `gorm:"default:'medium'" json:"priority"` // low, medium, high
    DueDate     *time.Time     `json:"due_date"`
    UserID      uint           `gorm:"not null" json:"user_id"`
    User        User           `gorm:"foreignKey:UserID" json:"user,omitempty"`
    CreatedAt   time.Time      `json:"created_at"`
    UpdatedAt   time.Time      `json:"updated_at"`
    DeletedAt   gorm.DeletedAt `gorm:"index" json:"-"`
}

// models/user.go
type User struct {
    ID        uint           `gorm:"primaryKey" json:"id"`
    Name      string         `gorm:"not null" json:"name"`
    Email     string         `gorm:"uniqueIndex;not null" json:"email"`
    Password  string         `gorm:"not null" json:"-"`
    Tasks     []Task         `gorm:"foreignKey:UserID" json:"tasks,omitempty"`
    CreatedAt time.Time      `json:"created_at"`
    UpdatedAt time.Time      `json:"updated_at"`
    DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}
```

#### 3. Authentication Middleware

```go
// middleware/auth.go
package middleware

import (
    "net/http"
    "strings"
    "github.com/gin-gonic/gin"
    "kelarin-api/utils"
)

func AuthMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        authHeader := c.GetHeader("Authorization")
        if authHeader == "" {
            c.JSON(http.StatusUnauthorized, gin.H{
                "error": "Authorization header required",
            })
            c.Abort()
            return
        }

        // Extract token from "Bearer <token>"
        tokenString := strings.Replace(authHeader, "Bearer ", "", 1)
        
        claims, err := utils.ValidateToken(tokenString)
        if err != nil {
            c.JSON(http.StatusUnauthorized, gin.H{
                "error": "Invalid token",
            })
            c.Abort()
            return
        }

        // Set user ID in context
        c.Set("userID", claims.UserID)
        c.Next()
    }
}
```

#### 4. Task Controller

```go
// controllers/task.go
package controllers

import (
    "net/http"
    "strconv"
    "github.com/gin-gonic/gin"
    "kelarin-api/database"
    "kelarin-api/models"
)

// GetTasks retrieves all tasks for authenticated user
func GetTasks(c *gin.Context) {
    userID, _ := c.Get("userID")
    
    var tasks []models.Task
    result := database.DB.Where("user_id = ?", userID).
        Order("created_at desc").
        Find(&tasks)
    
    if result.Error != nil {
        c.JSON(http.StatusInternalServerError, gin.H{
            "error": "Failed to fetch tasks",
        })
        return
    }

    c.JSON(http.StatusOK, gin.H{
        "data": tasks,
    })
}

// CreateTask creates a new task
func CreateTask(c *gin.Context) {
    userID, _ := c.Get("userID")
    
    var input models.Task
    if err := c.ShouldBindJSON(&input); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": err.Error(),
        })
        return
    }

    task := models.Task{
        Title:       input.Title,
        Description: input.Description,
        Status:      "pending",
        Priority:    input.Priority,
        DueDate:     input.DueDate,
        UserID:      userID.(uint),
    }

    if err := database.DB.Create(&task).Error; err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{
            "error": "Failed to create task",
        })
        return
    }

    c.JSON(http.StatusCreated, gin.H{
        "message": "Task created successfully",
        "data":    task,
    })
}

// UpdateTask updates an existing task
func UpdateTask(c *gin.Context) {
    userID, _ := c.Get("userID")
    taskID := c.Param("id")
    
    var task models.Task
    if err := database.DB.Where("id = ? AND user_id = ?", taskID, userID).
        First(&task).Error; err != nil {
        c.JSON(http.StatusNotFound, gin.H{
            "error": "Task not found",
        })
        return
    }

    var input models.Task
    if err := c.ShouldBindJSON(&input); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": err.Error(),
        })
        return
    }

    // Update fields
    updates := map[string]interface{}{
        "title":       input.Title,
        "description": input.Description,
        "status":      input.Status,
        "priority":    input.Priority,
        "due_date":    input.DueDate,
    }

    if err := database.DB.Model(&task).Updates(updates).Error; err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{
            "error": "Failed to update task",
        })
        return
    }

    c.JSON(http.StatusOK, gin.H{
        "message": "Task updated successfully",
        "data":    task,
    })
}

// DeleteTask deletes a task (soft delete)
func DeleteTask(c *gin.Context) {
    userID, _ := c.Get("userID")
    taskID := c.Param("id")
    
    result := database.DB.Where("id = ? AND user_id = ?", taskID, userID).
        Delete(&models.Task{})
    
    if result.RowsAffected == 0 {
        c.JSON(http.StatusNotFound, gin.H{
            "error": "Task not found",
        })
        return
    }

    c.JSON(http.StatusOK, gin.H{
        "message": "Task deleted successfully",
    })
}
```

---

### Frontend: React Application

#### 1. Component Structure

```
kelarin-web/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── Tasks/
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskFilter.jsx
│   │   └── Layout/
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   ├── services/
│   │   ├── api.js
│   │   └── auth.js
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── utils/
│   │   └── helpers.js
│   └── App.jsx
```

#### 2. API Service

```javascript
// services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Task operations
export const taskAPI = {
  getAll: () => api.get('/tasks'),
  getById: (id) => api.get(`/tasks/${id}`),
  create: (data) => api.post('/tasks', data),
  update: (id, data) => api.put(`/tasks/${id}`, data),
  delete: (id) => api.delete(`/tasks/${id}`),
};

// Auth operations
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

export default api;
```

#### 3. Task List Component

```jsx
// components/Tasks/TaskList.jsx
import React, { useState, useEffect } from 'react';
import { taskAPI } from '../../services/api';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import './TaskList.module.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await taskAPI.getAll();
      setTasks(response.data.data);
    } catch (err) {
      setError('Failed to load tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    try {
      await taskAPI.delete(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      alert('Failed to delete task');
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await taskAPI.update(id, { status: newStatus });
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, status: newStatus } : task
      ));
    } catch (err) {
      alert('Failed to update task status');
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  if (loading) return <div className="loading">Loading tasks...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <h2>My Tasks</h2>
        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
      </div>

      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          <p>No tasks found. Create one to get started!</p>
        </div>
      ) : (
        <div className="tasks-grid">
          {filteredTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
```

---

## 🎨 Key Features

### 1. **User Authentication**
- Secure JWT-based authentication
- bcrypt password hashing
- Protected routes

### 2. **Task Management**
- Create, Read, Update, Delete (CRUD) tasks
- Task status tracking (Pending, In Progress, Completed)
- Priority levels (Low, Medium, High)
- Due date management

### 3. **Filtering & Organization**
- Filter tasks by status
- Sort by priority or due date
- Search functionality

### 4. **Responsive Design**
- Mobile-first approach
- Works seamlessly on all devices

---

## 🚧 Challenges & Solutions

### Challenge 1: CORS Issues

**Problem:** Frontend couldn't communicate with backend due to CORS restrictions.

**Solution:**
```go
// main.go
import "github.com/gin-contrib/cors"

func main() {
    router := gin.Default()
    
    // Configure CORS
    router.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"http://localhost:3000"},
        AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
        AllowHeaders:     []string{"Content-Type", "Authorization"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
    }))
    
    // ... routes
}
```

### Challenge 2: State Management

**Problem:** Managing global authentication state across components.

**Solution:** Implemented Context API for centralized auth state:

```jsx
// context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### Challenge 3: Error Handling

**Problem:** Inconsistent error responses from API.

**Solution:** Standardized error responses:

```go
// Consistent error response format
type ErrorResponse struct {
    Error   string `json:"error"`
    Message string `json:"message,omitempty"`
}

// Helper function
func SendError(c *gin.Context, statusCode int, message string) {
    c.JSON(statusCode, ErrorResponse{
        Error:   http.StatusText(statusCode),
        Message: message,
    })
}
```

---

## 📊 Performance Optimizations

### Backend
- Database indexing on frequently queried fields
- Connection pooling for database
- Graceful shutdown handling
- Request validation at middleware level

### Frontend
- Lazy loading for components
- Debouncing for search inputs
- Optimistic UI updates
- Caching API responses

---

## 🏆 Achievement: Best Participant

![Schematic ITS Bootcamp Achievement](/images/schematic-bootcamp-award.jpg)
*Recognition as one of the best participants at Schematic ITS Advanced Bootcamp*

**What Made the Difference:**

1. **Clean Code Architecture**
   - Well-organized project structure
   - Consistent naming conventions
   - Proper separation of concerns

2. **Complete Documentation**
   - README with setup instructions
   - API documentation (Postman collection)
   - Code comments where needed

3. **Best Practices**
   - Error handling at every level
   - Input validation
   - Security measures (JWT, bcrypt)
   - Git workflow with meaningful commits

4. **Live Demo**
   - Deployed application
   - Working API endpoints
   - Smooth user experience

---

## 💡 Key Learnings

### Technical Skills

1. **Golang Proficiency**
   - Understanding of Go's concurrency model
   - Working with popular Go frameworks (Gin)
   - Database operations with GORM

2. **API Design**
   - RESTful principles
   - Proper HTTP status codes
   - Request/response patterns

3. **Full-Stack Integration**
   - Connecting frontend to backend
   - Authentication flows
   - State management

### Soft Skills

1. **Time Management**
   - Breaking down large tasks
   - Prioritizing features
   - Meeting deadlines

2. **Problem Solving**
   - Debugging complex issues
   - Finding solutions independently
   - Learning from documentation

3. **Attention to Detail**
   - Code quality matters
   - User experience is crucial
   - Documentation is important

---

## 🚀 Future Improvements

### Planned Features

1. **Real-time Updates**
   - WebSocket integration
   - Live collaboration
   - Notifications

2. **Advanced Features**
   - Task categories/tags
   - Recurring tasks
   - Subtasks
   - File attachments

3. **Analytics**
   - Productivity insights
   - Task completion statistics
   - Time tracking

4. **Mobile App**
   - React Native version
   - Offline support
   - Push notifications

---

## 🎓 Advice for Bootcamp Participants

### Before the Bootcamp

1. **Strengthen Fundamentals**
   - Make sure you understand HTTP, REST APIs
   - Practice with Git
   - Review programming basics

2. **Plan Your Project**
   - Define clear scope
   - List must-have vs nice-to-have features
   - Design your database schema early

### During the Bootcamp

1. **Ask Questions**
   - Don't hesitate to seek help
   - Learn from mentors and peers
   - Participate in discussions

2. **Focus on Core Features First**
   - Build MVP (Minimum Viable Product)
   - Add fancy features later
   - Ensure core functionality works

3. **Document as You Go**
   - Write README immediately
   - Comment your code
   - Keep track of decisions

### After the Bootcamp

1. **Keep Learning**
   - Improve your project
   - Learn from feedback
   - Explore new technologies

2. **Share Your Work**
   - Deploy your project
   - Write about your experience
   - Add to your portfolio

---

## 🔗 Project Links

- **Frontend:** [github.com/acaryawibawantra/kelarin-web](https://github.com/acaryawibawantra/kelarin-web)
- **Backend API:** [github.com/acaryawibawantra/kelarin-api](https://github.com/acaryawibawantra/kelarin-api)
- **Postman Collection:** Available in the API repository

---

## 🙏 Acknowledgments

Huge thanks to **Schematic ITS** for organizing this incredible bootcamp:
- Amazing mentors who guided us
- Fellow participants who made learning fun
- The organizing committee for their effort

This bootcamp was a game-changer in my development journey!

---

## 💬 Final Thoughts

Building Kelarin taught me that:
- **Good planning** saves development time
- **Clean code** impresses evaluators
- **Documentation** makes your project accessible
- **Persistence** pays off

If you're considering joining a bootcamp, my advice: **Just do it!** The learning experience is invaluable.

---

**Want to try Kelarin or contribute?** Check out the repositories and feel free to open an issue or PR. I'm always open to feedback and collaboration!

**Questions about the bootcamp or the project?** Reach out to me on [LinkedIn](https://linkedin.com/in/i-dewa-nyoman-acarya-wibawantra-708159315/) or [GitHub](https://github.com/acaryawibawantra)!

---

*Keep learning, keep building!* 🚀

**#SchematicITS #Bootcamp #Golang #React #FullStack #Achievement**
