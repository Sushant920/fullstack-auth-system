# Full-Stack Authentication System (MERN)

This is a **full-stack authentication system** built using the **MERN stack (MongoDB, Express, React, Node.js)** with JWT-based authentication. It includes user registration, login, and profile management.

## 🚀 Features
- **User Authentication** (Login, Register, Logout)
- **JWT-based Authentication** with Secure Cookie Storage
- **Protected Routes** (Only Authenticated Users Can Access Profile)
- **MongoDB Integration** with Mongoose
- **Styled UI** using Tailwind CSS
- **REST API with Express.js**


## 🛠️ Technologies Used
### Backend (Node.js + Express.js)
- **Node.js** - JavaScript Runtime
- **Express.js** - Backend Framework
- **MongoDB + Mongoose** - Database & ODM
- **JWT (JsonWebToken)** - Authentication
- **bcryptjs** - Password Hashing
- **dotenv** - Environment Variables
- **cookie-parser** - Handle Cookies

### Frontend (React + Vite)
- **React.js** - UI Library
- **React Router** - Navigation
- **Axios** - API Requests
- **Tailwind CSS** - Styling

## 🚀 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Sushant920/fullstack-auth-system.git
cd fullstack-auth-system
```

### 2️⃣ Setup Backend
```sh
cd backend
npm install
```

Run the backend server:
```sh
nodemon server.js
```

### 3️⃣ Setup Frontend
```sh
cd ../frontend
npm install
```
Run the frontend:
```sh
npm run dev
```

## 🌍 API Endpoints
### Auth Routes (`/api/auth`)
| Method | Endpoint   | Description |
|--------|-----------|-------------|
| POST   | `/register` | Register User |
| POST   | `/login`  | User Login |
| GET    | `/profile` | Get Profile (Protected) |
