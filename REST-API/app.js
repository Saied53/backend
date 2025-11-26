const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.route")
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/users", userRouter)



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

//client side error
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found, please try again!",
  });
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something error in server side!",
  });
});

module.exports = app;
