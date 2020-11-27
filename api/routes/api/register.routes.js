const express = require("express");
const router = express.Router();

const registerController = require("../../controllers/register.controllers");

// PATH /api/blog

router.post("/", [
  registerController.validate("register"),
  registerController.postRegisterUser,
]);

module.exports = router;
