// backend/server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const authRoutes = require("./routes/authRoutes");
// keep itemRoutes/userRoutes if present in your project
let itemRoutes;
let userRoutes;
try { itemRoutes = require("./routes/itemRoutes"); app.use("/api/items", itemRoutes); } catch(e){ /* optional */ }
try { userRoutes = require("./routes/userRoutes"); app.use("/api/user", userRoutes); } catch(e){ /* optional */ }

app.use("/api/auth", authRoutes);

// root
app.get("/", (req, res) => res.send("Lost & Found Backend Running..."));

// error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ msg: "Server Error" });
});

// connect to mongo only if MONGO_URI present (non-blocking if not set)
const PORT = process.env.PORT || 5000;
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected");
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
      console.error("MongoDB connection error:", err);
      // start server anyway for temporary auth/testing
      app.listen(PORT, () => console.log(`Server running (no DB) on port ${PORT}`));
    });
} else {
  console.log("MONGO_URI not set — starting server without DB (temporary mode).");
  app.listen(PORT, () => console.log(`Server running (no DB) on port ${PORT}`));
}
