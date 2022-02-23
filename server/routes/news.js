const express = require("express");
const NewsContrller = require("../controllers/NewsController");
const router = express.Router();
// Get: retrive all news
router.get("/", NewsContrller.index);
// GET: show the form of add a new new
router.get("/create", () => {});
// POST: store the new
router.post("/create", () => {});
// GET: show the form update new
router.get("/update", () => {});
router.put("/update", () => {});
router.delete("/delete", () => {});

module.exports = router;
