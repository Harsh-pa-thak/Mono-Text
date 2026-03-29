# MONOTEXT — Full-Stack Blog Platform

A premium blogging platform for developers and designers, built with React, Node.js, MongoDB, and Google Gemini AI.

---

## 🏗️ Architecture

```
blog2.0/
├── client/          ← React (Vite) + Tailwind CSS frontend
└── server/          ← Node.js + Express REST API backend
```

**Data Flow:**
```
Browser → React (Vite:5173) → Vite Proxy → Express (5000) → MongoDB
                                                           → Gemini API
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MongoDB running locally (`mongod`)
- A [Google Gemini API key](https://aistudio.google.com/app/apikey) *(optional for AI summarization)*

---

### 1. Setup the Server

```bash
cd server
cp .env.example .env
# Edit .env and add your GEMINI_API_KEY
npm install
```

### 2. Seed the Database

Populate MongoDB with 14 sample blog posts:

```bash
cd server
npm run seed
```

### 3. Start the Server

```bash
cd server
npm run dev      # with nodemon (auto-reload)
# or
npm start        # production
```

> Server runs at **http://localhost:5000**

---

### 4. Setup the Client

```bash
cd client
npm install
npm run dev
```

> Client runs at **http://localhost:5173**

---

## 🔑 Environment Variables

Create `server/.env` from `server/.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/monotext
GEMINI_API_KEY=your_gemini_api_key_here
```

- `MONGODB_URI` — local MongoDB URI (default works out of the box)
- `GEMINI_API_KEY` — from [Google AI Studio](https://aistudio.google.com/app/apikey). The app works without it; AI Summarize will show an error message.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Create new account |
| POST | `/auth/login` | Login with email + password |
| GET | `/blogs` | Get all blogs (newest first) |
| GET | `/blogs/:id` | Get a single blog |
| POST | `/blogs` | Create a new blog (login required) |
| DELETE | `/blogs/:id` | Delete a blog (own posts only) |
| GET | `/comments/:blogId` | Get comments for a blog |
| POST | `/comments/:blogId` | Add a comment (login required) |
| POST | `/ai/summarize` | Generate AI summary of blog content |
| POST | `/ai/chat` | Continuous contextual AI chat |

---

## 🧩 Data Models

### User
```js
{ username, email, password (bcrypt hashed), createdAt }
```

### Blog
```js
{ title, content, description, author, tags[], seed, readTime, likes, createdAt }
```

### Comment
```js
{ text, blogId (→ Blog), username, createdAt }
```

---

## 🗂️ Project Structure

```
client/src/
├── components/
│   ├── AIChat.jsx           ← Sidebar AI chat interface
│   ├── AISummary.jsx        ← Gemini summarization button
│   ├── BlobBackground.jsx   ← Animated gradient blobs
│   ├── BlogCard.jsx         ← Blog post card
│   ├── BlogCardSkeleton.jsx ← Shimmer loading card
│   ├── CategoryCard.jsx     ← Topic category card
│   ├── CommentSection.jsx   ← Comments list + form
│   ├── Footer.jsx
│   ├── Navbar.jsx           ← Sticky nav with auth state
│   └── Toast.jsx            ← Notification system (context)
├── context/
│   ├── AuthContext.jsx      ← User auth state + localStorage
│   └── ThemeContext.jsx     ← Dark/light theme toggle
├── pages/
│   ├── About.jsx
│   ├── BlogDetail.jsx       ← Full post, TOC, AI summary, comments
│   ├── Explore.jsx          ← Search, filter, sort all posts
│   ├── Home.jsx             ← Featured, categories, trending
│   ├── Login.jsx
│   ├── Profile.jsx          ← User's own posts
│   ├── Signup.jsx
│   └── Write.jsx            ← Create new post
├── services/
│   ├── aiService.js
│   ├── api.js               ← Axios instance
│   ├── authService.js
│   ├── blogService.js
│   └── commentService.js
└── App.jsx                  ← Router + all providers

server/
├── config/db.js             ← MongoDB connection
├── controllers/             ← Business logic
├── middleware/errorHandler.js
├── models/                  ← Mongoose schemas
├── routes/                  ← Express routes
├── seed.js                  ← DB seeding script
└── server.js                ← Express entry point
```

---

## ✨ Features

- 🌗 **Dark/Light Mode** — persisted in localStorage
- 🔐 **Auth** — signup, login, bcrypt passwords, localStorage session
- 📝 **CRUD Blogs** — create, read, delete (your own)
- 💬 **Comments** — per-blog comment thread
- 🤖 **AI Summarize & Chat** — Continuous conversational AI powered by Gemini 2.5 Flash (`@google/genai` SDK)
- 🔍 **Search + Filter** — real-time search, tag filters, sort
- ⚡ **Skeleton Loading** — shimmer cards while fetching
- 📖 **Reading Progress** — top progress bar on blog detail
- 📋 **Table of Contents** — auto-generated from headings

---

## 🧑‍💻 Authors

Built with ❤️ by **Harsh Pathak** and **Anubhav**, for developers.
