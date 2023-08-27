const express = require("express");
const router = express.Router();

const comments = require("../controllers/comments.controllers");
const houseConstruction = require("../controllers/houseConstruction.controllers");
const invitations = require("../controllers/invitations.controllers");

router.get("/comments", comments.list);
router.post("/comments", comments.create);

router.get("/house-construction", houseConstruction.list);
router.put("/house-construction", houseConstruction.create);

router.get("/invitations/:referencePerson", invitations.list);
router.put("/invitations", invitations.update);

module.exports = router;
