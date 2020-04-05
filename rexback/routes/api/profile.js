const express = require("express");
const router = express.Router();

//Item Model
const Profile = require("../../models/Profile");

// @route   GET api/profile
// @desc    Get all Items
// @access  Public
router.get("/", (req, res) => {
  Profile.find()
    .sort({ date: -1 })
    .then(profile => res.json(profile));
});

// @route   POST api/profile
// @desc    Create A Post
// @access  Public
router.post("/", (req, res) => {
  const newProfile = new Profile({
    user: req.body.user,
    address: req.body.address,
    mobile: req.body.mobile
  });

  newProfile.save().then(profile => res.json(profile));
});

// @route   Delete api/profile/:id
// @desc    Delete A Profile
// @access  Public
router.delete("/:id", (req, res) => {
  Profile.findById(req.params.id)
    .then(profile => profile.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(err).json({ sucess: false }));
});

module.exports = router;
