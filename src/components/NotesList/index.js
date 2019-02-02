import React from "react";

export const NotesList = props => {
    return (
        <ul>
            {props.children}
        </ul>
    )
}

export const NotesListItem = props => {
    return <li>{props.children}</li>
}