const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    note: String,
    date: {
        type: Date, default: Date.now
    }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;