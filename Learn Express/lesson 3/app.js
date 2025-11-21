// http response | html file, json

const express = require("express");
const app = express();

const userRouter = require("../Routers/users.route");

app.use("/resgister", (req, res) => {
  res.status(200).json({
    message: "I am a register page",
    statuscode: 200,
  });
});

module.exports = app;
