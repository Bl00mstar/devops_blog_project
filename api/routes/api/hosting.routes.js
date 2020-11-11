const express = require("express");
const router = express.Router();

const { auth } = require("../../middleware/auth");
const hostingController = require("../../controllers/hosting.controllers");

// PATH /api/hosting

//upload
router.post("/", [hostingController.postUploadFile]);
//download
router.get("/", [hostingController.getDownloadFile]);
//delete
router.post("/:filename", [hostingController.postDeleteFile]);

//render image?
// router.get("/user", auth, authController.getUserData);

module.exports = router;
