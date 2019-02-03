import React, { Component } from "react";
import API from "../utils/API";
import VoiceRecognition from "../components/VoiceRecognition";
import { NotesList, NotesListItem } from "../components/NotesList";

class Notes extends Component {
    state = {
        notes: [],
        note: "",
        date: "",
        start: false,
        stop: false
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

    storeNote = () => {
        if (this.state.note) {
            API.saveNote({
                note: this.state.note
            })
                .then(res => this.loadNotes())
                .catch(err => console.log(err));
        }
    }

    onResult = (finalTranscript) => {
        const result = finalTranscript;
        let date = new Date(Date.now());
        this.setState({ start: false, note: result, date: date });
        console.log(result);
        this.storeNote();
    }

    render() {
        return (
            <>
                <button id="startButton" onClick={() => this.setState({ start: true })}>START</button>

                {/* STOP BUTTON NOT FUNCTIONAL */}
                <button id="startButton" onClick={() => this.setState({ stop: true })}>STOP</button>

                {this.state.start && (
                    <VoiceRecognition
                        onResult={this.onResult}
                        continuous={true}
                        interimResults={true}
                        lang="en-US"
                    />
                )}

                {this.state.notes.length ? (
                    <NotesList>
                        {this.state.notes.map(note => {
                            return (
                                <NotesListItem key={note._id}>
                                    <a href={"notes/" + note._id}>
                                        <strong>
                                            {note.note}
                                        </strong>
                                    </a>
                                </NotesListItem>
                            );
                        })}
                    </NotesList>
                ) : (
                        <h2>No results to display</h2>
                    )}

            </>
        )
    }
}

export default Notes;