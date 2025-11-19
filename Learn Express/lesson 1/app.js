const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>Hi, I am a get method of express js</h1>")
})

module.exports = app;