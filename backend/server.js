require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Keamanan & Parser
app.use(helmet()); // Melindungi HTTP headers
app.use(cors()); // Mengizinkan akses dari Frontend React
app.use(express.json()); // Parsing body JSON

// Route Test Dasar
app.get("/api/health", (req, res) => {
  res
    .status(200)
    .json({
      status: "success",
      message: "Server Rental Game API berjalan lancar.",
    });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
