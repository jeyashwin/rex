const express = require("express");
const router = express.Router();

//Item Model
const User = require("../../models/User");

// @route   GET api/user
// @desc    Get all Users
// @access  Public
router.get("/", (req, res) => {
  User.find().then(user => res.json(user));
});

// @route   POST api/profile
// @desc    Create A Post
// @access  Public
router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    date: req.body.date
  });

  newUser.save().then(user => res.json(user));
});

// @route   Delete api/profile/:id
// @desc    Delete A Profile
// @access  Public
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(err).json({ sucess: false }));
});

module.exports = router;
