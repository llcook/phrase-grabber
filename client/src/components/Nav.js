import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
        <ul id="navbar">
            <li><Link to="/notes">All</Link></li>
            <li><Link to="/notes">Sort</Link></li>
        </ul>
        </>
    )
}

export default Nav;