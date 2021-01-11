const User = require("../models/user.model");
const authService = require("../services/auth.service");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

exports.postAuthUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(500).json({ message: "Please enter all fields." });
      return;
    }
    const { nick, password } = req.body;
    const exsistingUser = await authService.findUser(nick);
    if (!exsistingUser)
      return res.status(500).json({ message: "Invalid credentials" });
    bcrypt.compare(password, exsistingUser.password).then((isMatch) => {
      if (!isMatch)
        return res.status(500).json({ message: "Invalid credentials" });
      jwt.sign(
        { id: exsistingUser.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) return res.status(500).json({ message: "Cannot log in." });
          const userInfo = {
            token,
            user: {
              id: exsistingUser.id,
              nick: exsistingUser.nick,
              email: exsistingUser.email,
            },
          };
          return res.status(200).json({
            data: userInfo,
            message: "Successfully logged in.",
          });
        }
      );
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const userData = await authService.getUser(req.user.id);
    return res.status(200).json({
      status: 200,
      data: userData,
      message: "Successfully logged in.",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.validate = (method) => {
  switch (method) {
    case "login": {
      return [
        body("nick", "Input correct nickname.").not().isEmpty(),
        body("password", "Input password.").not().isEmpty(),
      ];
    }
  }
};
