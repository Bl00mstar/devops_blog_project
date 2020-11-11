const express = require("express");
const router = express.Router();

router.use("/api/tool/download", require("./api/download.routes"));
router.use("/api/tool/ftp", require("./api/ftp.routes"));
router.use("/api/support", require("./api/support.routes"));
router.use("/api/generator/kp", require("./api/generatorkp.routes"));
router.use("/api/auth", require("./api/auth.routes"));
// router.use("/api/user/profile", require("./api/userprofile"));
// router.use("/api/auth", require("./api/auth"));
// router.use("/api/auth/generatorkp", require("./api/generatorkp"));
// router.use("/api/auth/apicx", require("./api/apicx"));
// router.use("/api/support", require("./api/support"));
// router.use("/api/tool/ftp", require("./api/ftp"));
// router.use("/api/tool/files", require("./api/files"));

module.exports = router;