const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attorneySchema = new Schema({
  user: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  attorneynumber: {
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

const Attorney = mongoose.model("Attorney", attorneySchema);
module.exports = Attorney;
