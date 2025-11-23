const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/register", (req, res) => {
    const fullName = req.body.fullName;
    const age = req.body.age;
  res.send(`Your full name is: ${fullName} <br> your age is ${age}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
