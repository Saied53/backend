const express = require("express");
const app = express();
const PORT = 3000;

const middleWare = (req, res, next) => {
  console.log("this is middleware function");

  req.currentTime = new Date(Date.now())
  next();
};

app.use(middleWare)

app.get("/",(req, res) => {
    console.log("home " + req.currentTime)
  res.send("Hello");
});

app.get("/about", (req, res) => {
    console.log("about " + req.currentTime)
  res.send("about page");
});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
