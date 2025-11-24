const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/circle", (req, res) => {
  res.sendFile(path.join(__dirname, "circle.html"));
});
app.get("/triangle", (req, res) => {
  res.sendFile(path.join(__dirname, "triangle.html"));
});


app.post("/triangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area  = 0.5 * height*base;
  res.send(`Result of Triangle Area is = ${area}`)
});

app.post("/cricle", (req, res) => {
  const radius = req.body.radius;
  const circle  = Math.PI* radius*radius;
  res.send(`Result of Circle Area is = ${circle}`)
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
