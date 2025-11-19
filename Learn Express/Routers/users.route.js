const express = require('express')
const router = express.Router()

router.get("/login", (req, res) => {
  res.send("this is the login route");
});

router.get("/signin", (req, res) => {
  res.send("this is the signin route");
});

router.get("/service", (req, res) => {
  res.send("this is the service route");
});

module.exports = router;