import React from "react";

const TextInput = props => {
    return (
        <div id="TextInput">
            <h2>Translated text goes here:</h2>
            <p id="NewText" {...props}></p>
        </div>
    );
}

export default TextInput;