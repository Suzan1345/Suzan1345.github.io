import React from 'react';
import './style.css';
import {Link} from "react-router-dom"; // Stelle sicher, dass du die CSS-Datei importierst

const KontaktPage = () => {
    return (
        <div>
            <footer>
                <img className="footer-image" src="/bild-1.jpg" alt="footer"/>
            </footer>

            <div className="impressum">
                <Link to="/impressum">Impressum</Link>
            </div>
            <div className="kontakt">
                <Link to="/kontakt">Kontakt</Link>
            </div>

            <div className="toolbar">
                <div className="toolbar-left">
                    <Link to="/">Startseite</Link>
                    <Link to="/To-do">To-Do</Link>
                </div>
                <div className="toolbar-right">
                    <button className="dropbtn">Profil</button>
                    <div className="dropdown-content">
                        <Link to="/Login">Anmelden</Link>
                    </div>
                </div>
            </div>

            <div className="textschreibung">
                <p>Briefe und postalisches bitte an unsere Adresse:--></p>
            </div>

            <div className="NeuerText">
                <p>Ansonsten könnt ihr uns auch gerne eine E-Mail schreiben unter:</p>
                <p>fake@email.com</p>
            </div>

            <img className="map" src="Screenmap.jpg" alt="screenmap"/>
            <img className="whitespace" src="background.jpg" alt="background"/>
            <img className="header-image" src="websitee.jpg" alt="websitee"/>
        </div>
    );
}

export default KontaktPage;