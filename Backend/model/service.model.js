const mongoose = require("mongoose");

let Service = new mongoose.Schema({
  serviceName: { type: String, required: true },
  price: { type: Number, required: true },
});

const service = mongoose.model("Service", Service);

module.exports = service;
