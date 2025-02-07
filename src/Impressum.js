import React from 'react';
import './style.css';
import {Link} from "react-router-dom"; // Stelle sicher, dass du die CSS-Datei importierst

const ImpressumPage = () => {
    return (
        <div>


            <div className="newImpressum">
                <h1>Impressum</h1>
            </div>

            <div className="toolbar">
                <div className="toolbar-left">
                    <Link to="/">Startseite</Link>
                    <Link to="/To-do">To-Do</Link>
                </div>
                <div className="toolbar-right">
                    <div className="dropdown">
                        <button className="dropbtn">Profil</button>
                        <div className="dropdown-content">
                            <Link to="/anmelden">Anmelden</Link>
                        </div>
                    </div>
                    <button className="buttonSearch">Suchen</button>
                </div>
            </div>

            <div className="TETE">
                <p>Hier ist ein Impressumstext</p>
                <p> ........................................................................</p>
                <p> ........................................................................</p>
                <p> ........................................................................</p>
                <p> ........................................................................</p>
            </div>

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
    )
        ;
}

export default ImpressumPage;