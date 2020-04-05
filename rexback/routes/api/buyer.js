const express = require("express");
const router = express.Router();

//Item Model
const Buyer = require("../../models/Buyer");

// @route   GET api/profile
// @desc    Get all Items
// @access  Public
router.get("/", (req, res) => {
  Buyer.find().then(buyer => res.json(buyer));
});

// @route   POST api/profile
// @desc    Create A Post
// @access  Public
router.post("/", (req, res) => {
  const newBuyer = new Buyer({
    user: req.body.user,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    propertyaddress: req.body.propertyaddress
  });

  newBuyer.save().then(buyer => res.json(buyer));
});

// @route   Delete api/profile/:id
// @desc    Delete A Profile
// @access  Public
router.delete("/:id", (req, res) => {
  Buyer.findById(req.params.id)
    .then(buyer => buyer.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(err).json({ sucess: false }));
});

module.exports = router;
