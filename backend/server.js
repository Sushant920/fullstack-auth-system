require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");

const allowedOrigins = ["http://localhost:5173", ""]; //frontend server connect

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: allowedOrigins,
    credentials: true
  }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get("/api/test", (req, res) => {
    res.json({ message: "Test route working!" });
  });