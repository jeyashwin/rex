const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buyerSchema = new Schema({
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

const Buyer = mongoose.model("Buyer", buyerSchema);
module.exports = Buyer;
