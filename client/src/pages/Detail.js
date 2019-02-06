import React, { Component } from "react";
import API from "../utils/API";
import Date from "../components/Date";

class Detail extends Component {
    state = {
        note: {}
    };

    componentDidMount() {
        API.getNote(this.props.match.params.id)
            .then(res => this.setState({ note: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
            <div id="single-note" className="container-fluid">
                <p id="note-detail">{this.state.note.note}</p>
                <Date>{this.state.note.date}</Date>
            </div>
            </>
        );
    }
}

export default Detail;