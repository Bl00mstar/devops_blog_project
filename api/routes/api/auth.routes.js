const express = require("express");
const router = express.Router();

const { auth } = require("../../middleware/auth");
const authController = require("../../controllers/auth.controllers");

// PATH /api/auth

router.post("/", [
  authController.validate("login"),
  authController.postAuthUser,
]);

router.get("/user", auth, authController.getUserData);

module.exports = router;
