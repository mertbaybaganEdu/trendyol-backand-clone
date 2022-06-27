const express = require("express");

const phonesController = require("../../controllers/Products/phonesController");
const router = express.Router();

router.get("/", phonesController.GetAllProductPhone);
router.get("/:slugify", phonesController.GetProductPhone);
router.post("/", phonesController.CreateProductPhone);

module.exports = router;
