const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.send(htmlForm);
});

router.post("/users", (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
});

module.exports = router;