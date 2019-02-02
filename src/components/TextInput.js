import React from "react";

const TextInput = props => {
    return (
        <div id="speechTextInput">
            <h2>Translated text goes here:</h2>
            <p {...props}></p>
        </div>
    );
}

export default TextInput;