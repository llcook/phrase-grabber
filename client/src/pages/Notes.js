import React, { Component } from "react";
import API from "../utils/API";
import VoiceRecognition from "../components/VoiceRecognition";
import NewNote from "../components/NewNote";

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
                <button id="start-button" onClick={() => this.setState({ start: true })}>&#11044;</button>

                {this.state.start && (
                    <VoiceRecognition
                        onResult={this.onResult}
                    />
                )}

                <NewNote key={this.state.note._id}>
                    {this.state.note}
                </NewNote>
            </>
        )
    }
}

export default Notes;