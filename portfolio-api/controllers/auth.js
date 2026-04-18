const jwt = require("jsonwebtoken");
const User = require("../models/users");

const secretKey = process.env.SECRETKEY || "mysecretkey";

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email?.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      });
    }

    const matched = await user.comparePassword(password);
    if (!matched) {
      return res.status(401).json({
        success: false,
        message: "Email and/or password don't match.",
      });
    }

    const payload = {
      id: user._id,
      email: user.email,
      firstname: user.firstname,
    };

    const token = jwt.sign(payload, secretKey, {
      algorithm: "HS256",
      expiresIn: "1h",
    });

    res.json({
      success: true,
      message: "User authenticated successfully.",
      token,
    });
  } catch (err) {
    next(err);
  }
};