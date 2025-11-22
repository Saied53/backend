const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const {id, name} = req.query;
  res.send(`The id is: ${id} and also name is ${name}`);
  res.send("Hi, i am home");
});

module.exports = app;
