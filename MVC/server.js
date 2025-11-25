const express = require("express");
const userRouter = require("./routes/users.route");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

const users = [
  {
    name: "Saydur Rahman",
    age: 32,
  },
  {
    name: "Khaled",
    age: 32,
  },
];

const htmlForm = `
<form method="POST" action="/users">
<input type="text" placeholder="Enter your name" name="name"/>
<input type="number" placeholder="Enter your age" name="age"/>
<button type="submit">Submit</button>
</form>
`;

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
