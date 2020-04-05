const express = require("express");
const router = express.Router();

//Item Model
const Property = require("../../models/Property");

// @route   GET api/property
// @desc    Get all property
// @access  Public
router.get("/", (req, res) => {
  Property.find().then(property => res.json(property));
});

// @route   POST api/profile
// @desc    Create A Post
// @access  Public
router.post("/", (req, res) => {
  const newProperty = new Property({
    user: req.body.user,
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    address: req.body.address,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    zip: req.body.zip,
    propertyType: req.body.propertyType,
    status: req.body.status,
    beds: req.beds.status,
    baths: req.baths.status,
    area: req.area.status,
    garages: req.garages.status,
    features: req.features.status,
    date: req.date.status
  });
  newProperty.save().then(property => res.json(property));
});

// @route   Delete api/profile/:id
// @desc    Delete A Profile
// @access  Public
router.delete("/:id", (req, res) => {
  Property.findById(req.params.id)
    .then(property => property.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(err).json({ sucess: false }));
});

module.exports = router;
