const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loanofficerSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  loanofficernumber: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  state: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const LoanOfficer = mongoose.model("LoanOfficer", loanofficerSchema);
module.exports = LoanOfficer;
