// http response | html file, json

const express = require("express");
const path = require("path");
const app = express();
const userRouter = require("../Routers/users.route");

app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, 'register.html'));
});

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;
