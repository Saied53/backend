const { v4: uuidv4 } = require("uuid");

const users = [
  { id: uuidv4(), userName: "Saydur Rahman", email: "SaydurRahman@gmail.com" }
];

module.exports = users;
