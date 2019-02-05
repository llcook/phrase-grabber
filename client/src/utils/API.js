import axios from "axios";

export default {
    // Gets all notes
    getNotes: function () {
        return axios.get("/api/notes");
    },
    // Gets the note with the given ID
    getNote: function (id) {
        return axios.get("/api/notes/" + id);
    },
    // Saves a note to the database
    saveNote: function (noteData) {
        return axios.post("/api/notes", noteData);
    }
};