const Note = require("../models/note.model");

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).json({
      message: "Note berhasil diambil",
      data: notes,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({
        message: "Note tidak ditemukan",
      });
    }
    res.status(200).json({
      message: "Note dengan id " + id + " berhasil ditemukan!", // <-- Diperbaiki
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const note = await Note.create({
      title,
      description,
    });
    res.status(201).json({
      message: "Note berhasil dibuat",
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedNote = await Note.findByIdAndUpdate(id, req.body, {
      new: true,
    }); // <-- Diperbaiki
    if (!updatedNote) {
      return res.status(404).json({
        message: "Note tidak ditemukan",
      });
    }
    res.status(200).json({
      message: "Note berhasil diupdate",
      data: updatedNote,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({
        message: "Note tidak ditemukan",
      });
    }
    res.status(200).json({
      message: "Note berhasil dihapus",
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { getNotes, getNoteById, createNote, updateNote, deleteNote };
