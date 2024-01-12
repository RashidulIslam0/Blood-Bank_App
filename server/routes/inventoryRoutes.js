const express = require("express");
const authMiddelware = require("../middeware/authMiddelware");
const {
  createInventoryController,
} = require("../controllers/inventoryController");
const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddelware, createInventoryController);

module.exports = router;
