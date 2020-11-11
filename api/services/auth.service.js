const User = require("../models/user.model");
exports.getUser = async (id) => {
  try {
    const userData = await User.findById(id).select("-password");
    return userData;
  } catch (error) {
    throw Error("Error while getting user data.");
  }
};

exports.findUser = async (nick) => {
  try {
    const findByNick = await User.findOne({ nick });
    return findByNick;
  } catch (error) {
    throw Error("Cannot find this username.");
  }
};
