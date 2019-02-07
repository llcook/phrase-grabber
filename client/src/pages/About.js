import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <h3>Hello</h3>
           
            <p>This app is powered by the <a target="blank" href={"https://w3c.github.io/speech-api/"}>Web Speech API</a> and a number of <a target="blank" href={"https://github.com/llcook/phrase-grabber/blob/master/client/package.json"}>front-end</a> and <a target="blank" href={"https://github.com/llcook/phrase-grabber/blob/master/package.json"}>back-end</a> technologies.
            </p>

            <p>Each stored <Link to={"/api/notes"}>object</Link> represents one instance of speech recognition. Waves of text represent transcriptions stored while in progress.</p>
            
            <p>Future updates will demonstrate live transcription.</p>

            <p>2019 <a href="https://github.com/llcook/phrase-grabber">llcook</a></p>

        </>
    )
}

export default About;