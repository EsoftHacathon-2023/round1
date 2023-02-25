const mongoose = require("mongoose");

let User = new mongoose.Schema({
  fullName: { type: String, required: true },
  number: { type: Number, required: true },
  address: { type: String, required: true },
  age: { type: Number, required: true },
  payment: { plan: { type: String }, price: { type: Number } },
});

const user = mongoose.model("User", User);

module.exports = user;
