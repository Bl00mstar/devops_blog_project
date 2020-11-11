const User = require("../models/user.model");

exports.isEmailInDb = async (email) => {
  try {
    const emailData = await User.findOne({ email });
    return emailData;
  } catch (error) {
    return false;
  }
};

exports.isNickInDb = async (nick) => {
  try {
    const nickData = await User.findOne({ nick });
    return nickData;
  } catch (error) {
    return false;
  }
};

exports.registerUser = async (userData) => {
  try {
    const addUser = await userData.save();
    return addUser;
  } catch (error) {
    throw Error(error);
  }
};
