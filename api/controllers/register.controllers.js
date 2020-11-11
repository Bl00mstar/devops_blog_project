const User = require("../models/user.model");
const registerService = require("../services/register.service");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

exports.postRegisterUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ msg: "Please enter all fields." });
      return;
    }
    const { nick, email, password } = req.body;
    const busyEmail = await registerService.isEmailInDb(email);
    if (busyEmail) {
      return res.status(400).json({ msg: "Email is already used." });
    }
    const busyNick = await registerService.isNickInDb(nick);
    if (busyNick) {
      return res.status(400).json({ msg: "Nick is already used." });
    }
    user = new User({
      nick,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    const registerUser = await registerService.registerUser(user);
    if (registerUser) {
      return res
        .status(200)
        .json({ msg: "User " + registerUser.nick + " was created!" });
    }
    console.log(registerUser);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

exports.validate = (method) => {
  switch (method) {
    case "register": {
      return [
        body("nick", "Input your nickname.").not().isEmpty(),
        body("email", "Input email.").not().isEmpty(),
        body("password", "Input password.").not().isEmpty(),
        body("password2", "Input password.").not().isEmpty(),
      ];
    }
  }
};
