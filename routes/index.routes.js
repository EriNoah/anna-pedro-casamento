const express = require("express");
const router = express.Router();

const comments = require("../controllers/comments.controllers");

router.get("/comments", comments.list);
router.post("/comments", comments.create);

module.exports = router;
