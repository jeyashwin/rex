const express = require("express");
const router = express.Router();

//Item Model
const Attorney = require("../../models/Attorney");

// @route   GET api/profile
// @desc    Get all Items
// @access  Public
router.get("/", (req, res) => {
  Attorney.find().then(attorney => res.json(attorney));
});

// @route   POST api/profile
// @desc    Create A Post
// @access  Public
router.post("/", (req, res) => {
  const newAttorney = new Attorney({
    user: req.body.user,
    name: req.body.name,
    attorneynumber: req.body.attorneynumber,
    state: req.body.state,
    company: req.body.company,
    email: req.body.email
  });

  newAttorney.save().then(attorney => res.json(attorney));
});

// @route   Delete api/profile/:id
// @desc    Delete A Profile
// @access  Public
router.delete("/:id", (req, res) => {
  Attorney.findById(req.params.id)
    .then(attorney => attorney.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(err).json({ sucess: false }));
});

module.exports = router;
