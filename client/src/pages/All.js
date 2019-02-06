import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { NotesList, NotesListItem } from "../components/NotesList";

class All extends Component {
    state = {
        notes: []
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        API.getNotes()
            .then(res => {
                console.log(res.data);
                this.setState({ notes: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <NotesList>
                    {this.state.notes.map(note => (
                        <NotesListItem key={note._id}>
                            <Link to={"/notes/" + note._id}>
                                <strong>
                                    {note.note}
                                </strong>
                            </Link>
                        </NotesListItem>
                    ))}
                </NotesList>
            </>
        )
    }
}

export default All;