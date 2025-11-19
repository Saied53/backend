const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hi, I'm a get route</h1>");
});

app.post("/", (req, res) => {
  res.send("<h1>Hi, I'm a post route</h1>");
});

app.delete("/", (req, res) => {
  res.send("<h1>Hi, I'm a delete route</h1>");
});

app.put("/", (req, res) => {
  res.send("<h1>Hi, I'm a put route</h1>");
});

module.exports = app;
