// controllers/colorsController.js
const express = require("express");
const colors = express.Router();
const { getAllColors ,getColor,createColor} = require("../queries/color");


// INDEX
colors.get("/", async (req, res) => {
  const allColors = await getAllColors();
  if (allColors[0]) {
    res.status(200).json(allColors);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

colors.get("/:id", async (req, res) => {
  const { id } = req.params;
  const color = await getColor(id);
  if (color) {
    res.json(color);
  } else {
    res.status(404).json({ error: "not found" });
  }
});
// CREATE
colors.post("/", async (req, res) => {
  const color = await createColor(req.body);
  res.json(color);
});

module.exports = colors;