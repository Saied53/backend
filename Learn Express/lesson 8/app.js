const express = require("express");
const app = express();
const PORT = 3000;


app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  
  // Validate if id is numeric
  if (!/^\d+$/.test(id)) {
    return res.status(400).send({ message: "Invalid product ID" });
  }
  
  res.send(`Product ID: ${id}`);
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
