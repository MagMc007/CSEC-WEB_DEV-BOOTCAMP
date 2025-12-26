const express = require("express");
const mainRoutes = require("./routes/mainRoutes");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Base route (Specific Route requirement)
app.use("/api", mainRoutes);

// Handle unknown routes (Bonus)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
