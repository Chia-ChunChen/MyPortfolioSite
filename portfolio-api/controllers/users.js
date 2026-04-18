const mongoose = require("mongoose");
const User = require("../models/users");

function toDTO(doc) {
  const obj = doc.toObject ? doc.toObject() : doc;
  return {
    firstname: obj.firstname,
    lastname: obj.lastname,
    email: obj.email,
    created: obj.created,
    updated: obj.updated,
    id: String(obj._id),
  };
}

exports.getAll = async (req, res) => {
  try {
    const list = await User.find().sort({ _id: 1 });
    res.json({
      success: true,
      message: "Users list retrieved successfully.",
      data: list.map(toDTO),
    });
  } catch (err) {
    console.error("getAll error:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid id.",
      });
    }

    const doc = await User.findById(id);

    if (!doc) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.json({
      success: true,
      message: "User retrieved successfully.",
      data: toDTO(doc),
    });
  } catch (err) {
    console.error("getById error:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const email = req.body.email?.toLowerCase().trim();

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Email already exists.",
      });
    }

    const now = new Date();

    const created = await User.create({
      firstname: req.body.firstname ?? req.body.firstName,
      lastname: req.body.lastname ?? req.body.lastName,
      email,
      password: req.body.password,
      created: now,
      updated: now,
    });

    res.status(201).json({
      success: true,
      message: "User added successfully.",
      data: toDTO(created),
    });
  } catch (err) {
    console.error("create error:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid id.",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.firstname = req.body.firstname ?? req.body.firstName ?? user.firstname;
    user.lastname = req.body.lastname ?? req.body.lastName ?? user.lastname;
    user.email = req.body.email?.toLowerCase().trim() ?? user.email;

    if (req.body.password && req.body.password.trim() !== "") {
      user.password = req.body.password;
    }

    user.updated = new Date();

    await user.save();

    res.json({
      success: true,
      message: "User updated successfully.",
    });
  } catch (err) {
    console.error("update error:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid id.",
      });
    }

    const deleted = await User.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.json({
      success: true,
      message: "User removed successfully.",
    });
  } catch (err) {
    console.error("remove error:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};