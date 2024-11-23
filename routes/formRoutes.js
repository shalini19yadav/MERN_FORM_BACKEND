const express = require("express");
const router = express.Router();
const FormModel = require("../models/Form");

// Get all forms
router.get("/", async (req, res) => {
  const forms = await FormModel.find();
  res.json(forms);
});

router.post("/", async (req, res) => {
  const { name, email, gender, contact, city, dateOfRegister } = req.body;
  const newForm = new FormModel({ name, email, gender, contact, city, dateOfRegister });
  await newForm.save();
  res.json(newForm);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, gender, contact, city, dateOfRegister } = req.body;
  const updatedForm = await FormModel.findByIdAndUpdate(
    id,
    { name, email, gender, contact, city, dateOfRegister },
    { new: true }
  );
  res.json(updatedForm);
});


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await FormModel.findByIdAndDelete(id);
  res.json({ message: "Form deleted" });
});

module.exports = router;