const express = require("express");
const router = express.Router();
const { auth } = require("../../middleware/auth");
const aboutConttroller = require("../../controllers/about.controllers");

router.get("/:id", [aboutConttroller.getAbout]);
router.post("/:id", auth, [aboutConttroller.editAbout]);

module.exports = router;
