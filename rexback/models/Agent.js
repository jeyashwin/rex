const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  licensenumber: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  state: {
    type: String,
    required: true
  },
  brokerage: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Agent = mongoose.model("Agent", profileSchema);
module.exports = Agent;
