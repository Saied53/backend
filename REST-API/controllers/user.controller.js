let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = (req, res) => {
  res.status(200).json({
    users,
  });
};

//create new user
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    userName: req.body.userName,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(users);
};

//update new user
const updateUser = (req, res) => {
    const userid = req.params.id;
    const {userName, email}= req.body;
    users.filter((user)=> user.id === userid).map((selectedUser)=>{
        selectedUser.userName = userName;
        selectedUser.email = email;
    })
  res.status(200).json(users);
};

//delete new user
const deleteUser = (req, res) => {
    const userid = req.params.id;
    users = users.filter((user)=> user.id !== userid)
  res.status(200).json(users);
};

module.exports = { getAllUsers, createUser , updateUser, deleteUser};
