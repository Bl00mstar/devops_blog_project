const User = require("../models/user.model");
const { body, validationResult } = require("express-validator");

exports.postRegisterUser = async (req, res) => {
  console.log("asd");
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ msg: "Please enter all fields." });
      return;
    }
    const { nick, email, password } = req.body;
    console.log(nick);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

//

//       try {
//         let user = await User.findOne({ email: email });
//         if (user) {
//           return res.status(400).json({ msg: "User already exsist" });
//         }

//         user = new User({
//           name,
//           email,
//           password,
//         });

//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);

//         await user.save();

//         const payload = {
//           user: {
//             id: user.id,
//           },
//         };
//         jwt.sign(
//           payload,
//           config.get("jwtSecret"),
//           {
//             expiresIn: 36000,
//           },
//           (err, token) => {
//             if (err) throw err;
//             res.json({ token });
//           }
//         );
//       } catch (err) {
//         console.error(err.message);
//         res.status(500).send("Server Error");
//       }
//     }
//   );

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
