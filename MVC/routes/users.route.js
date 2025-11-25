const express = require("express");
const { getUsers, saveusers } = require("../controllers/user");
const router = express.Router();


router.get("/users", getUsers);

router.post("/users", saveusers);

module.exports = router;