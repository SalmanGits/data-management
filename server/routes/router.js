const express = require("express");
const router = express.Router();
const {
  getUsers,
  getSingleUser,
  postUser,
  updateUser,
  deleteUser,
} = require("../controller/controllers");

router.get("/", getUsers);
router.get("/user/:id", getSingleUser);
router.post("/user", postUser);
router.put("/edit/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
