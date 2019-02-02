import axios from "axios";

export default {
    // Gets all notes
    getNotes: () => {
        return axios.get("/api/notes");
    },
    // Gets the note with the given ID
    getNote: id => {
        return axios.get("/api/notes/" + id);
    },
    // Saves a note to the database
    saveNote: noteData => {
        return axios.post("api/notes", noteData);
    }
};