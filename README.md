# 🎬 QuickShow

A full-stack movie ticket booking platform built using the MERN stack. Users can browse movies, view show details, select seats, and book tickets through a seamless and responsive interface. The application integrates TMDB for live movie data, Clerk for authentication, Razorpay for payments, and is fully containerized using Docker and Docker Compose.

---

## 🚀 Features

- 🔐 User authentication and authorization using Clerk
- 🎟️ Dynamic seat selection and ticket booking
- 🎬 Live movie data integration with TMDB API
- 💳 Razorpay payment gateway integration
- 🛠️ Admin dashboard for managing movies, shows, and bookings
- ⚡ Responsive UI for desktop and mobile devices
- 🐳 Dockerized frontend and backend services
- 📦 Multi-container deployment using Docker Compose

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Authentication
- Clerk

### Payments
- Razorpay

### APIs
- TMDB API

### DevOps
- Docker
- Docker Compose
- Nginx

---

## 🏗️ System Architecture

```text
┌──────────────┐
│ React + Nginx│
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Express API  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ MongoDB Atlas│
└──────────────┘
```

---

## 📁 Project Structure

```text
QuickShow/
│
├── client/          # React Frontend
├── server/          # Express Backend
├── docker-compose.yml
│
└── README.md
```

---

## ⚙️ Local Setup

```bash
git clone https://github.com/Aakriti380/QuickShow.git
cd QuickShow

# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

---

## 🐳 Docker Setup

### Run Complete Application

```bash
docker compose up
```

This will:

- Build frontend and backend images
- Create Docker network
- Start all containers automatically

### Access Application

Frontend:

```text
http://localhost
```

Backend:

```text
http://localhost:3000
```

### Stop Containers

```bash
docker compose down
```

---

## 📈 Future Improvements

- Redis-based real-time seat locking
- WebSocket-based live seat updates
- Email notifications and booking confirmations
- Booking analytics dashboard
- CI/CD pipeline using GitHub Actions
- AWS deployment

---

## 👩‍💻 Author

**Aakriti Vishnoi**

GitHub: https://github.com/Aakriti380
LinkedIn: https://www.linkedin.com/in/aakriti-vishnoi-3532422a4/


