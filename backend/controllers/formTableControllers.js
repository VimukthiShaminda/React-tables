const Data = require("../models/formTableModels");

// GET all data
const getAllData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new data or update existing data
const updateData = async (req, res) => {
  const { email, question, answer } = req.body;
  try {
    let data = await Data.findOne({ email });
    if (data) {
      data.answer = answer;
      await data.save();
    } else {
      data = new Data({ email, question, answer });
      await data.save();
    }
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getAllData, updateData };
