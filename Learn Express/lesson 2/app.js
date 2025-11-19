const express = require("express");
const app = express();
const userRouter = require("../Routers/users.route.js");

app.use("/api/user",userRouter);

app.get("/", (req, res) => {
  res.send("this is the home route");
});
app.use((req, res) => {
  res.send("<h1>404: Page not found!</h1>");
});

module.exports = app;
