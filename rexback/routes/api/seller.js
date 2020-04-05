const express = require("express");
const router = express.Router();

//Item Model
const Seller = require("../../models/Seller");

// @route   GET api/profile
// @desc    Get all Items
// @access  Public
router.get("/", (req, res) => {
  Seller.find().then(seller => res.json(seller));
});

// @route   POST api/profile
// @desc    Create A Post
// @access  Public
router.post("/", (req, res) => {
  const newSeller = new Seller({
    user: req.body.user,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    propertyaddress: req.body.propertyaddress
  });

  newSeller.save().then(seller => res.json(seller));
});

// @route   Delete api/profile/:id
// @desc    Delete A Profile
// @access  Public
router.delete("/:id", (req, res) => {
  Seller.findById(req.params.id)
    .then(seller => seller.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(err).json({ sucess: false }));
});

module.exports = router;
