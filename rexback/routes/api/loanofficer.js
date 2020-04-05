const express = require("express");
const router = express.Router();

//Item Model
const LoanOfficer = require("../../models/LoanOfficer");

// @route   GET api/profile
// @desc    Get all Items
// @access  Public
router.get("/", (req, res) => {
  LoanOfficer.find().then(loanofficer => res.json(loanofficer));
});

// @route   POST api/profile
// @desc    Create A Post
// @access  Public
router.post("/", (req, res) => {
  const newLoanOfficer = new LoanOfficer({
    user: req.body.user,
    name: req.body.name,
    loanofficernumber: req.body.loanofficernumber,
    state: req.body.state,
    company: req.body.company,
    email: req.body.email
  });

  newLoanOfficer.save().then(loanofficer => res.json(loanofficer));
});

// @route   Delete api/profile/:id
// @desc    Delete A Profile
// @access  Public
router.delete("/:id", (req, res) => {
  LoanOfficer.findById(req.params.id)
    .then(loanofficer =>
      loanofficer.remove().then(() => res.json({ sucess: true }))
    )
    .catch(err => res.status(err).json({ sucess: false }));
});

module.exports = router;
