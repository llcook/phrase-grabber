import React, { Component } from "react";
import API from "../utils/API";
import VoiceRecognition from "../components/VoiceRecognition";
import { Container, Row, Col, Button, Jumbotron } from "reactstrap";

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

                <Jumbotron id="intro">
                    <h1 className="display-3">Welcome</h1>
                    <p className="lead">This user-activated Chrome desktop app listens for speech, translates it to text and stores it in a database.</p>
                    <hr className="my-2" />
                    <p>Click to start the translation. The machine captures data until a pause in speech. It produces the result below.</p>
                    <p className="lead">
                        <Button id="start-button" color="danger" onClick={() => this.setState({ start: true })}>Say something</Button>
                    </p>
                </Jumbotron>


                {this.state.start && (
                    <VoiceRecognition
                        onResult={this.onResult}
                    />
                )}

                <Container id="new-note">
                    <Row>
                        <Col>
                            <h1 className="display-3" key={this.state.note._id}>
                                {this.state.note}
                            </h1>
                        </Col>
                    </Row>
                </Container>

            </>
        )
    }
}

export default Notes;