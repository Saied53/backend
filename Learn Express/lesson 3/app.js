// http response | html file, json

const express = require("express");
const path = require("path");
const app = express();
// const userRouter = require("../Routers/users.route");



app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, 'register.html'));
});


app.get("/login", (req, res) => {
  res.cookie("name", "SaydurRahman");
  res.cookie("age", "30");

  res.append("ID", "123");

  res.clearCookie("name");

  res.end();
});

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, 'index.html'));
});
module.exports = app;
