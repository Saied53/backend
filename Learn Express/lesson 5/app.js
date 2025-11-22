const express = require("express");
const app = express();

// request route with params
// app.get("/userID/:id/userAGE/:age", (req, res) => {
//   const { id, age } = req.params;

//   res.send(`the student id is: ${id} and his age: ${age}`);
// });

// request with header

app.get("/", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");

  res.send(`<h1>the is : ${id}, and name is - ${name}</h1>`);
});

module.exports = app;
