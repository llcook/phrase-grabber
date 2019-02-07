import React, { Component } from "react";
import API from "../utils/API";
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import About from "./About";

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
                <Row>
                    <Col id="about">
                        <About />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup id="all-notes" variant="flush">
                            {this.state.notes.map(note => (
                                <ListGroupItem key={note._id}>
                                        {note.note}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </>
        )
    }
}

export default All;