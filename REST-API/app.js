const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})

app.use((req, res, next)=>{
    res.status(404).json({
        message: "Route not found, please try again!"
    })
})

module.exports = app;
