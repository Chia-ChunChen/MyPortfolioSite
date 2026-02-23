const mongoose = require("mongoose");
const Project = require("../models/projects");

function toDTO(doc) {
  if (!doc) return null;
  const obj = doc.toObject ? doc.toObject() : doc;
  return {
    title: obj.title,
    completion: obj.completion,
    description: obj.description,
    id: String(obj._id),
  };
}

exports.getAll = async (req, res, next) => {
  try {
    const list = await Project.find().sort({ _id: 1 });
    res.json({
      success: true,
      message: "Projects list retrieved successfully.",
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

    const doc = await Project.findById(id);
    if (!doc) {
      return res.status(404).json({ success: false, message: "Project not found." });
    }

    res.json({
      success: true,
      message: "Project retrieved successfully.",
      data: toDTO(doc),
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const payload = {
      title: req.body.title,
      completion: req.body.completion,
      description: req.body.description,
    };

    const created = await Project.create(payload);

    res.status(201).json({
      success: true,
      message: "Project added successfully.",
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

    const payload = {
      title: req.body.title,
      completion: req.body.completion,
      description: req.body.description,
    };

    const updated = await Project.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Project not found." });
    }

    res.json({ success: true, message: "Project updated successfully." });
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

    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Project not found." });
    }

    res.json({ success: true, message: "Project removed successfully." });
  } catch (err) {
    next(err);
  }
};
