import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import "./style.css"; // Falls die CSS-Datei in React verwendet wird

console.log("login.js wurde geladen!");

function Anmelden() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // handleLogin wird jetzt nur nach erfolgreichem Login ausgeführt
    const handleLogin = () => {
        navigate("/ProfilUser");
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Verhindert das Standard-Formularverhalten (Seitenreload)
        console.log("Login-Daten werden gesendet:", { email, password });
        // Sende Login-Daten an den Server
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
            // Nur weiterleiten, wenn der Login erfolgreich war
            handleLogin();
        } else {
            // Zeigt eine Fehlermeldung an, wenn der Login fehlschlägt
            alert("Fehler: " + data.message);
        }
    };

    return (
        <div>
            <div className="newContainer">
                <h1>Bitte melde dich an</h1>
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
                            <Link to="/Profil">Anmelden</Link>
                        </div>
                    </div>
                    <button className="buttonSearch">Suchen</button>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="einabe1">
                    <div className="beschreibung1">
                        <label htmlFor="email">Benutzername:</label>
                    </div>
                    <input
                        type="text"
                        id="email"
                        name="name"
                        placeholder="E-Mail-Adresse..."
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="einabe2">
                    <div className="beschreibung2">
                        <label htmlFor="password">Passwort:</label>
                    </div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Passwort..."
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="button2">
                        <button type="submit">Anmelden</button>
                    </div>
                </div>
            </form>

            <div className="passwortVergessen">
                <a href="/passwort-vergessen">Passwort vergessen</a>
            </div>

            <button className="registerButton" onClick={() => navigate("/registrieren")}>
                Neues Konto
            </button>

            <img className="secondwhite" src="/background.jpg" alt="Hintergrund"/>
            <img className="header-image" src="/websitee.jpg" alt="Website-Banner"/>
        </div>
    );
}

export default Anmelden;