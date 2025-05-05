    const express = require('express');
    const router = express.Router();
    const {createNote, deleteNote, getNoteById, getNotes, updateNote} = require('../controller/note.controller')

    router.get('/', getNotes);
    router.get('/:id', getNoteById);

    router.post('/', createNote);

    router.put('/:id', updateNote);

    router.delete('/:id', deleteNote);

    module.exports = router;