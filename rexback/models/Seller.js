const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  propertyaddress: {
    type: String,
    required: true
  }
});

const Seller = mongoose.model("Seller", sellerSchema);
module.exports = Seller;
