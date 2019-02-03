import React, { Component } from "react";
import API from "../utils/API";
import VoiceRecognition from "../components/VoiceRecognition";
import TextInput from "../components/TextInput";
import { NotesList, NotesListItem } from "../components/NotesList";

// Notes page will re-render every time state is updated with a new note
// Will VoiceRecognition instance re-render, too? how to avoid this from happening?
// POTENTIAL SOLUTION: PUTTING START BUTTON IN ITS OWN COMPONENT?

class Notes extends Component {
    state = {
        notes: [],
        note: "",
        date: "",
        start: false
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

    onResult = (finalTranscript) => {
        const result = finalTranscript;

        this.setState({ start: false, note: result });
        console.log(result);

        // MIC STOPS WHEN SPEECH STOPS AND RESULT IS RETURNED

        // if set start: true after console.log, it continues until there's about 10 seconds silence
        // but then the start button doesn't work anymore -- the click event sets start to true
        // and on timeout after click, start button is no longer working
    }

    // CREATE SYNTHETIC EVENT HANDLER TO STORE TEXT?

    render() {
        return (
            <>
                {/* Set start to true */}
                <button id="startButton" onClick={() => this.setState({ start: true })}>START</button>

                {this.state.start && (
                    <VoiceRecognition
                        onResult={this.onResult} 
                        continuous={true}
                        interimResults={true}
                        lang="en-US"
                    />
                )}
                <div id="VoiceNote">
                    <TextInput>
                        {/* name="note"
                        value={this.state.note}
                        onChange={this.handleInputChange}> */}
                        
                        {/* SHOULD NOT BE FORM
                        SEE: SYNTHETIC EVENT HANDLERS
                        TO STORE CHANGE TO THE ELEMENT */}
                        {this.state.note}
                    </TextInput>
                </div>

                    {this.state.notes.length ? (
                        <NotesList>
                            {this.state.notes.map(note => {
                                return (
                                    <NotesListItem key={note._id}>
                                        <a href={"/notes/" + note._id}>
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