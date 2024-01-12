const express = require("express");
// const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const connectDB = require("./DB/db");
const PORT = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/v1/auth", require("./routes/authRoutes"));

app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

app.get("/", (req, res) => {
  res.send("Hello Wordl");
});
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not found</h1>");
});

app.listen(PORT, async () => {
  console.log(`server is running at http://localhost:${PORT}`);
  await connectDB();
});
