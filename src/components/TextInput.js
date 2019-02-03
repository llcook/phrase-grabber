import React from "react";

const TextInput = props => {
    return (
        <div id="TextInput">
            <h2>Translated text appears in p below:</h2>
            <p id="NewText" {...props}></p>
        </div>
    );
}

export default TextInput;