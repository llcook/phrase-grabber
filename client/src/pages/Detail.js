import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

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
                <h2>{this.state.note.date}</h2>
                    <p>{this.state.note.note}</p>
                <p><Link to="/">← Back to Notes</Link></p>
            </>
        );
    }
}

export default Detail;