const User = require("../models/user.model");
exports.getUser = async (id) => {
  try {
    const userData = await User.findById(id).select("-password");
    return userData;
  } catch (error) {
    throw Error("Error while getting user data.");
  }
};

exports.findUser = async (email) => {
  try {
    const findByEmail = await User.findOne({ email });
    return findByEmail;
  } catch (error) {
    throw Error("Cannot find email address.");
  }
};
