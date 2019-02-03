import React, { Component } from "react";
import API from "../utils/API";
import VoiceRecognition from "../components/VoiceRecognition";
import TextInput from "../components/TextInput";
import { NotesList, NotesListItem } from "../components/NotesList";

// Notes will re-render every time state is updated with a new note - will VoiceRecognition instance re-render, too? how to avoid this from happening?

class Notes extends Component {
    state = {
        notes: [],
        note: "",
        date: "",
        start: false,
        stop: false
    }

    // Triggers only once when component *initially* mounts
    // Good spot for AJAX calls
    componentDidMount() {
       this.loadNotes();
    }

    loadNotes = () => {
        API.getNotes()
            // .then(res => this.setState({ notes: res.data }))
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    onResult = ({ interimTranscript, finalTranscript }) => {
        const interim = interimTranscript;
        const result = finalTranscript;

        this.setState({ start: false, interimTranscript: interim, finalTranscript: result });
        console.log(result);

        // at this point, mic stops when speech stops
        // if set start: true after console.log, it continues until there's about 10 seconds silence
        // but then the start button doesn't work anymore -- the click event sets start to true
    }

    // handle when note text is placed in input
    // this will grab the name, value attribute off of the element that was changed
    // this will be the input
    // handleInputChange = event => {
    //     // stores the name, value identified in <input>
    //     const { name, value } = event.target; // 10.5-1:54:04
    //     this.setState({
    //         [name]: value
    //     })
    // }

    render() {
        return (
            <>
                {/* Set start to true */}
                <button id="startButton" onClick={() => this.setState({ start: true })}>start</button>

                {this.state.start && (
                    <VoiceRecognition
                        onResult={this.onResult}
                        continuous={true}
                        interimResults={true}
                        lang="en-US"
                    />
                )}
                <div id="VoiceNote">
                    <TextInput
                        name="note"
                        value={this.state.note}
                        onChange={this.handleInputChange}>
                        {this.state.finalTranscript}
                    </TextInput>
                </div>
                <div id="NotesList">
                    <NotesList>
                        <NotesListItem />
                        <NotesListItem />
                        <NotesListItem />
                        <NotesListItem />
                        <NotesListItem />
                        <NotesListItem />
                    </NotesList>

                    {/* {this.state.notes.length ? (
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
                        </NotesList> */}
                </div>
            </>
        )
    }
}

export default Notes;