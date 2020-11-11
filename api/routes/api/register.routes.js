const express = require("express");
const router = express.Router();

const registerController = require("../../controllers/register.controllers");

router.post("/", [
  registerController.validate("register"),
  registerController.postRegisterUser,
]);
router.get("/", function (req, res) {
  res.status(201).json({
    data: userInfo,
    message: "Successfully logged in.",
  });
});

module.exports = router;
