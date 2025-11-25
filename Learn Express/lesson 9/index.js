const express = require("express");
const app = express();
const PORT = 3000;



app.get("/", (req, res)=>{
    res.send(`Hi, welcome another lession`)
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
