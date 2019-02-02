const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    // this will somehow grab the user's IP address:
    note: String,
    date: { type: Date, default: Date.now}
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;