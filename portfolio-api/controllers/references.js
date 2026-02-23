const mongoose = require("mongoose");
const Reference = require("../models/references");

function toDTO(doc) {
  const obj = doc.toObject ? doc.toObject() : doc;
  return {
    firstname: obj.firstname,
    lastname: obj.lastname,
    email: obj.email,
    position: obj.position,
    company: obj.company,
    id: String(obj._id),
  };
}

exports.getAll = async (req, res, next) => {
  try {
    const list = await Reference.find().sort({ _id: 1 });
    res.json({
      success: true,
      message: "References list retrieved successfully.",
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

    const doc = await Reference.findById(id);
    if (!doc) return res.status(404).json({ success: false, message: "Reference not found." });

    res.json({
      success: true,
      message: "Reference retrieved successfully.",
      data: toDTO(doc),
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const created = await Reference.create({
      firstname: req.body.firstname ?? req.body.firstName,
      lastname: req.body.lastname ?? req.body.lastName,
      email: req.body.email,
      position: req.body.position,
      company: req.body.company,
    });

    res.status(201).json({
      success: true,
      message: "Reference added successfully.",
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

    const updated = await Reference.findByIdAndUpdate(
      id,
      {
        firstname: req.body.firstname ?? req.body.firstName,
        lastname: req.body.lastname ?? req.body.lastName,
        email: req.body.email,
        position: req.body.position,
        company: req.body.company,
      },
      { new: true }
    );

    if (!updated) return res.status(404).json({ success: false, message: "Reference not found." });

    res.json({ success: true, message: "Reference updated successfully." });
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

    const deleted = await Reference.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: "Reference not found." });

    res.json({ success: true, message: "Reference removed successfully." });
  } catch (err) {
    next(err);
  }
};
