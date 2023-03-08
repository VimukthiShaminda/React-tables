const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    default: "",
  },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
