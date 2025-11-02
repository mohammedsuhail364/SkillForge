# ✨ Full-Stack Interview Platform

> A modern, real-time collaborative coding interview platform with video conferencing, code execution, and automated feedback.

---

## 🌟 Overview

Transform your technical interviews with a comprehensive platform that combines live video calls, collaborative coding, and instant feedback. Built for both interviewers and candidates, this platform streamlines the entire technical interview process.

---

## 🚀 Key Features

### 💻 **Coding Environment**
- **VSCode-Powered Editor** - Professional code editing experience with syntax highlighting and IntelliSense
- **Real-time Collaboration** - Code together seamlessly with synchronized updates
- **Multi-language Support** - Execute code in isolated, secure environments
- **Instant Feedback** - Automatic test case validation with success/fail notifications
- **Confetti Celebrations** - Reward successful solutions with visual feedback

### 🎥 **Video & Communication**
- **1-on-1 Video Rooms** - High-quality peer-to-peer video interviews
- **Screen Sharing** - Share your screen for better collaboration
- **Session Recording** - Capture interviews for later review
- **Real-time Chat** - Text communication alongside video calls
- **Audio/Video Controls** - Easy toggle for mic and camera

### 🔐 **Security & Access**
- **Clerk Authentication** - Enterprise-grade user authentication
- **Room Locking** - Strict 2-participant limit per interview room
- **Secure Code Execution** - Sandboxed environment for safe code running
- **Protected Routes** - Role-based access control

### 📊 **Management & Analytics**
- **Interactive Dashboard** - Live statistics and interview metrics
- **Practice Mode** - Solo coding environment for skill development
- **Background Jobs** - Async task processing with Inngest
- **Smart Caching** - Optimized data fetching with TanStack Query

### 🛠️ **Developer Experience**
- **REST API** - Clean, well-documented Node.js/Express backend
- **Modern Stack** - React, TypeScript, Tailwind CSS
- **Code Quality** - CodeRabbit AI for PR analysis and optimization
- **Git Workflow** - Professional branching, PR, and merge strategies
- **Easy Deployment** - Pre-configured for Sevalla (free-tier friendly)

---

## 🏗️ Tech Stack

### Frontend
- **React** with JavaScript
- **Tailwind CSS** for styling
- **TanStack Query** for data management
- **Clerk** for authentication
- **Stream** for video/chat
- **Monaco Editor** (VSCode core)

### Backend
- **Node.js** & **Express**
- **MongoDB** for database
- **Inngest** for background jobs
- **Stream API** for real-time communication
- **Docker** for code execution sandbox

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- MongoDB instance
- Clerk account
- Stream account
- Inngest account

### Clone Repository
```bash
git clone <your-repo-url>
cd SkillForge
```

---

## ⚙️ Environment Configuration

### Backend Setup (`/backend/.env`)

```bash
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
DB_URL=your_mongodb_connection_url

# Background Jobs (Inngest)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Video & Chat (Stream)
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Authentication (Clerk)
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# CORS
CLIENT_URL=http://localhost:5173
```

### Frontend Setup (`/frontend/.env`)

```bash
# Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# API Connection
VITE_API_URL=http://localhost:3000/api

# Video & Chat
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🚀 Running the Application

### Start Backend Server

```bash
cd backend
npm install
npm run dev
```

Backend will run on `http://localhost:3000`

### Start Frontend Application

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:5173`

---

## 📚 API Documentation

The REST API provides endpoints for:
- User authentication and management
- Interview room creation and access
- Code submission and execution
- Chat and video session management
- Analytics and statistics

Full API documentation available at `/api/docs` when running the server.

---

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

---

## 🚢 Deployment

### Backend Deployment
1. Set environment variables on your hosting platform
2. Configure MongoDB connection string
3. Deploy backend to Sevalla or your preferred platform

### Frontend Deployment
1. Update `VITE_API_URL` to production backend URL
2. Build the frontend: `npm run build`
3. Deploy the `dist` folder to static hosting

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Quality
- All PRs are automatically reviewed by CodeRabbit
- Follow existing code style and conventions
- Write meaningful commit messages
- Add tests for new features

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Clerk** for authentication infrastructure
- **Stream** for video and chat capabilities
- **Inngest** for background job processing
- **Monaco Editor** for the VSCode experience
- **CodeRabbit** for AI-powered code reviews

---

## 📧 Support

For questions and support:
- Open an issue on GitHub
- Contact the maintainers
- Check the documentation wiki

---

## 🗺️ Roadmap

- [ ] Multi-participant rooms
- [ ] Interview templates and presets
- [ ] AI-powered code suggestions
- [ ] Advanced analytics dashboard
- [ ] Mobile app support
- [ ] Integration with ATS platforms
- [ ] Whiteboard collaboration
- [ ] Calendar integration

---

<div align="center">

**Built with ❤️ for better technical interviews**

[⭐ Star this repo](https://github.com/your-repo) | [🐛 Report Bug](https://github.com/your-repo/issues) | [✨ Request Feature](https://github.com/your-repo/issues)

</div>