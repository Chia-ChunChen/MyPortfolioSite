const mongoose = require("mongoose");
const User = require("../models/users");

function toDTO(doc) {
  const obj = doc.toObject ? doc.toObject() : doc;
  return {
    firstname: obj.firstname,
    lastname: obj.lastname,
    email: obj.email,
    password: obj.password,
    created: obj.created,
    updated: obj.updated,
    id: String(obj._id),
  };
}

exports.getAll = async (req, res, next) => {
  try {
    const list = await User.find().sort({ _id: 1 });
    res.json({
      success: true,
      message: "Users list retrieved successfully.",
      data: list.map(toDTO),
    });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid id." });
    }

    const doc = await User.findById(id);
    if (!doc) return res.status(404).json({ success: false, message: "User not found." });

    res.json({
      success: true,
      message: "User retrieved successfully.",
      data: toDTO(doc),
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const now = new Date();
    const created = await User.create({
      firstname: req.body.firstname ?? req.body.firstName,
      lastname: req.body.lastname ?? req.body.lastName,
      email: req.body.email,
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
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid id." });
    }

    const updated = await User.findByIdAndUpdate(
      id,
      {
        firstname: req.body.firstname ?? req.body.firstName,
        lastname: req.body.lastname ?? req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        updated: new Date(),
      },
      { new: true }
    );

    if (!updated) return res.status(404).json({ success: false, message: "User not found." });

    res.json({ success: true, message: "User updated successfully." });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid id." });
    }

    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: "User not found." });

    res.json({ success: true, message: "User removed successfully." });
  } catch (err) {
    next(err);
  }
};
