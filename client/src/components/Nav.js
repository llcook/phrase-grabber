import React from "react";
import { Link } from "react-router-dom";

function Nav() {

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
                <span className="navbar brand mb-0" to="/"><Link to="/">Phrase Grabber</Link></span>
                <ul className="navbar-nav navbar">
                    <li><Link to="/notes">View all</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;