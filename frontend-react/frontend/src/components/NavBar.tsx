import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return <div>
        <div>
            <nav className="navbarBox">
                <Link to={"/"} ><img src="/assets/saopauloW.png" alt="" /></Link>
            </nav>
        </div>
    </div>
}

export default NavBar;