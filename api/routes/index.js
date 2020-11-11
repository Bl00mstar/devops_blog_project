const express = require("express");
const router = express.Router();

router.use("/api/auth", require("./api/auth.routes"));
router.use("/api/register", require("./api/register.routes"));

module.exports = router;