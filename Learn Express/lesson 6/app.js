const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/user", (req, res) => {
  res.send(`welcome`);
});

app.post("/payment", (req, res) => {
  const py = req.body.py;
  res.send(`<h1>welcome ${py}</h1>`);
});

module.exports = app;
