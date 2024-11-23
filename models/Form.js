const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  contact: { type: String, required: true },
  city: { type: String, required: true },
  dateOfRegister: { type: Date, required: true },
});

module.exports = mongoose.model("Form", FormSchema);