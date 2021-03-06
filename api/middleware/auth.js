const config = require("config");
const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  console.log(req.body);
  console.log(req.header);
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(211).json({ msg: "No token, authorization denied" });
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded;
    next();
  } catch (error) {
    res.status(211).json({ msg: "Token is not valid" });
  }
};
