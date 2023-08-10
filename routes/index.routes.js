const express = require("express");
const router = express.Router();

const comments = require("../controllers/comments.controllers");
const houseConstruction = require("../controllers/houseConstruction.controllers");

router.get("/comments", comments.list);
router.post("/comments", comments.create);

router.get("/house-construction", houseConstruction.list);
router.put("/house-construction", houseConstruction.create);

module.exports = router;
