const User = require("../model/User");

const getUsers = async (req, res) => {
  const user = await User.find();
  res.send(user);
};
const getSingleUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  res.send(user);
};
const postUser = async (req, res) => {
  const newUser = await new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  });
  newUser.save().then((data) => {
    res.json(data);
  });
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const updatedUser = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send(updatedUser);
};
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deletedUser = await User.findByIdAndDelete(id);
  res.send(deletedUser);
};
module.exports = { getUsers, postUser, updateUser, deleteUser, getSingleUser };
