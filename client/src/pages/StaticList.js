import React, { Component } from "react";
import API from "../utils/API";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Date from "../components/Date";
import { Link } from "react-router-dom";

class StaticList extends Component {
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
                    <Col>
                        <ListGroup id="all-notes" variant="flush">
                            {this.state.notes.map(note => (
                                <ListGroupItem key={note._id}>
                                    <Link to={"/notes/" + note._id}>
                                        {note.note}</Link>
                                        <Date>{note.date}</Date>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </>
        )
    }
}

export default StaticList;