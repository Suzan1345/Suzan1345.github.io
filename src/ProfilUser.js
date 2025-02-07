import React, { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import "./style.css"; // Falls du eine CSS-Datei verwendest

function ProfilPage() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Benutzerdaten vom Backend abrufen
        const fetchUserData = async () => {
            try {
                const response = await fetch("http://localhost:3000/profil", {
                    method: "GET",
                    credentials: "include",
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data); // Daten im State speichern
                } else {
                    console.error("Fehler bei der Anfrage:", response.status, response.statusText);
                    alert("Du musst dich anmelden, um dein Profil zu sehen.");
                    navigate("/Login"); // Wenn nicht angemeldet, zur Anmeldeseite weiterleiten
                }
            } catch (error) {
                console.error("Fehler beim Abrufen der Benutzerdaten:", error);
                alert("Es gab ein Problem beim Laden des Profils.");
                navigate("/Login");
            }
        };

        fetchUserData();
    }, [navigate]);

    if (!userData) {
        return <div>Loading...</div>; // Daten werden noch geladen
    }

    return (
        <div>
            <footer>
                <img className="footer-image" src="/bild-1.jpg" alt="footer"/>
            </footer>

            <button className="secondButtonContainer" onClick={() => navigate("/registrieren")}>
                Registrieren
            </button>

            <button className="firstbuttonContainer" onClick={() => navigate("/anmelden")}>
                Anmelden
            </button>

            <img className="whitespace" src="/background.jpg" alt="background"/>

            <div className="container">
                <h1>Dein Profil</h1>
            </div>

            <div className="Profilbeschreibung">
                <p>__________________________________________________________________________________________________________</p>
                <p>Hier kannst du Text hinzufügen, um dein Profil / dich zu beschreiben:</p>
                <p>Um diese Seite bearbeiten zu können, melde dich bitte an oder erstelle ein neues Konto!</p>
            </div>

            <div className="ProfilbeschreibungNeu">
                <p>Mitglied seit:</p>
                <p>---</p>
                <p></p>
                <p>Letzter Login:</p>
                <p>---</p>
            </div>

            <img className="Profilbild" src="/Profilbild.jpg" alt="Profilbild"/>

            <div className="Anmeldebutton">
                <button className="anmeldebutton" onClick={() => navigate("/login")}>
                    Anmelden
                </button>
            </div>

            <div className="impressum">
                <a href="/impressum">Impressum</a>
            </div>

            <div className="kontakt">
                <a href="/kontakt">Kontakt</a>
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

            <img className="header-image" src="/websitee.jpg" alt="websitee"/>
        </div>
    );


}

export default ProfilPage;