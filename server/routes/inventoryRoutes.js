const express = require("express");
const authMiddelware = require("../middeware/authMiddelware");
const {
  createInventoryController,
  getInventoryController,
} = require("../controllers/inventoryController");
const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddelware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddelware, getInventoryController);
module.exports = router;
