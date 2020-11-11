const express = require("express");
const router = express.Router();

const { auth } = require("../../middleware/auth");
const authController = require("../../controllers/auth.controllers");

//@PATH /api/auth
//@Public
//@auth users
router.post("/", [
//   authController.validate("login"),
//   authController.postAuthUser,
]);
// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get("/user", auth, authController.getUserData);

module.exports = router;