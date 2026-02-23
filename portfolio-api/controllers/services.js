const mongoose = require("mongoose");
const Service = require("../models/services");

function toDTO(doc) {
  if (!doc) return null;
  const obj = doc.toObject ? doc.toObject() : doc;
  return {
    title: obj.title,
    description: obj.description,
    id: String(obj._id),
  };
}

exports.getAll = async (req, res, next) => {
  try {
    const list = await Service.find().sort({ _id: 1 });
    res.json({
      success: true,
      message: "Services list retrieved successfully.",
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

    const doc = await Service.findById(id);
    if (!doc) return res.status(404).json({ success: false, message: "Service not found." });

    res.json({
      success: true,
      message: "Service retrieved successfully.",
      data: toDTO(doc),
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const created = await Service.create({
      title: req.body.title,
      description: req.body.description,
    });

    res.status(201).json({
      success: true,
      message: "Service added successfully.",
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

    const updated = await Service.findByIdAndUpdate(
      id,
      { title: req.body.title, description: req.body.description },
      { new: true }
    );

    if (!updated) return res.status(404).json({ success: false, message: "Service not found." });

    res.json({ success: true, message: "Service updated successfully." });
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

    const deleted = await Service.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: "Service not found." });

    res.json({ success: true, message: "Service removed successfully." });
  } catch (err) {
    next(err);
  }
};
