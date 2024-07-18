// app.js
// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

const colorsController = require("./controllers/colorsController.js");
app.use("/colors", colorsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Colors App");
});
// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

// EXPORT
module.exports = app;