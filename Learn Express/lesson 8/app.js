const express = require("express");
const app = express();
const PORT = 3000;

app.get("/product/:id", (req, res) => {
  res.send(`Product is id:  ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
