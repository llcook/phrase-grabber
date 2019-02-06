import React from "react";

function Date(props) {
    return (
        <>
            <p id="date">
                {props.children}
            </p>
        </>
    );
}

export default Date;