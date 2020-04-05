const express = require("express");
const router = express.Router();

//Item Model
const Agent = require("../../models/Agent");

// @route   GET api/profile
// @desc    Get all Items
// @access  Public
router.get("/", (req, res) => {
  Agent.find().then(agent => res.json(agent));
});

// @route   POST api/profile
// @desc    Create A Post
// @access  Public
router.post("/", (req, res) => {
  const newAgent = new Agent({
    user: req.body.user,
    name: req.body.name,
    licensenumber: req.body.licensenumber,
    state: req.body.state,
    brokerage: req.body.brokerage,
    email: req.body.email
  });

  newAgent.save().then(agent => res.json(agent));
});

// @route   Delete api/profile/:id
// @desc    Delete A Profile
// @access  Public
router.delete("/:id", (req, res) => {
  Agent.findById(req.params.id)
    .then(agent => agent.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(err).json({ sucess: false }));
});

module.exports = router;
