import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <h3>Technology</h3>
            <p>This app is powered by the <Link to={"https://w3c.github.io/speech-api/"}>Web Speech API.</Link></p>

            <p>&copy; 2019 <Link to={"https://llcook.us"}>LLC</Link></p>

        </>
    )
}

export default About;