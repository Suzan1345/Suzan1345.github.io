import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Layout = () => {
    return (
        <div>
            {/* Header */}
            <div className="container">
                <h1>Willkommen bei deinem Planer</h1>
            </div>

            {/* Toolbar */}
            <div className="toolbar">
                <div className="toolbar-left">
                    <Link className="active" to="/">Startseite</Link>
                    <Link to="/To-do">To-Do</Link>
                </div>
                <div className="toolbar-right">
                    <div className="dropdown">
                        <button className="dropbtn">Profil</button>
                        <div className="dropdown-content">
                            <Link to="/Login">Anmelden</Link>
                        </div>
                    </div>
                    <button className="buttonSearch">Suchen</button>
                </div>
            </div>

            {/* Impressum & Kontakt */}
            <div className="impressum">
                <Link to="/impressum">Impressum</Link>
            </div>
            <div className="kontakt">
                <Link to="/kontakt">Kontakt</Link>
            </div>

            <div>
            <img className="header-image" src="/websitee.jpg" alt="Website"/>
            <img className="whitespace" src="/background.jpg" alt="Hintergrund"/>
            </div>

            {/* Footer */}
            <footer>
                <img className="footer-image" src="/bild-1.jpg" alt="Footer"/>
            </footer>
        </div>
    );
};

export default Layout;