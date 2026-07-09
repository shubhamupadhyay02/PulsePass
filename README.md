# 🎫 PulsePass

> A Full-Stack MERN Event Ticket Booking Platform with JWT Authentication, Role-Based Authorization, Admin Dashboard, and Real-Time Event Management.

## 🌐 Live Demo

👉 https://pulse-pass-dusky.vercel.app/

## 📂 GitHub Repository

👉 https://github.com/shubhamupadhyay02/PulsePass

---

# 📖 Overview

PulsePass is a modern full-stack event ticket booking platform where users can browse events, book tickets, and manage their bookings, while administrators can create, edit, and manage events through a dedicated admin dashboard.

The project follows the MERN architecture and implements secure authentication, RESTful APIs, MongoDB Atlas, and role-based access control.

---

# ✨ Features

### 👤 User Features

- Secure User Registration & Login
- JWT Authentication
- Browse All Events
- Search Events
- View Event Details
- Book Tickets
- Prevent Duplicate Bookings
- View My Bookings
- Protected Routes

### 👨‍💼 Admin Features

- Admin Login
- Admin Dashboard
- Add Events
- Edit Events
- Delete Events
- Manage Event Listings

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- CORS

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

# 📁 Folder Structure

```
PulsePass
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── package.json
│
└── README.md
```

---

# 🔐 Authentication Flow

- User Login
- Password Hashing using bcrypt
- JWT Token Generation
- Token Stored on Client
- Protected API Access
- Role-Based Authorization for Admin Routes

---

# 📡 REST APIs

### Authentication

```
POST /api/register
POST /api/login
```

### Events

```
GET /api/events
GET /api/events/:id
POST /api/events
PUT /api/events/:id
DELETE /api/events/:id
```

### Bookings

```
POST /api/bookings/book
GET /api/bookings/user/:userId
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/shubhamupadhyay02/PulsePass.git
```

## Backend

```bash
cd server
npm install
npm start
```

## Frontend

```bash
cd client
npm install
npm run dev
```

---

# 🔑 Environment Variables

## Server

```
PORT=
MONGODB_URI=
JWT_SECRET=
```

## Client

```
VITE_API_URL=
```

---

# 🎯 Future Improvements

- Razorpay / Stripe Payment Gateway
- Email Notifications
- QR Code Tickets
- Seat Selection
- Event Categories
- Image Upload using Cloudinary
- Admin Analytics Dashboard
- Ticket Cancellation
- Booking History
- Event Reviews

---

# 👨‍💻 Author

Shubham Kumar Upadhyay

LinkedIn: https://www.linkedin.com/in/shubham-upadhyay-653248248/

GitHub:
https://github.com/shubhamupadhyay02

---

## ⭐ If you like this project, don't forget to star the repository!
