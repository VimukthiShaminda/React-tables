const express = require("express");
const router = express.Router();
const dataController = require("../controllers/formTableControllers");

// GET all data
router.get("/", dataController.getAllData);

// POST new data or update existing data
router.post("/", dataController.updateData);

module.exports = router;
