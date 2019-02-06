import React from "react";

function NewNote(props) {
    return (
        <>
            <p id="new-note">
                {props.children}
            </p>
        </>
    )
}

export default NewNote;