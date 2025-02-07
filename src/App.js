import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Startseite from './Startseite.js';
import ToDo from './To-Do.js';
import Impressum from './Impressum.js';
import Kontakt from './Kontakt.js';
import Login from './Login.js';
import Profil from "./Profil.js";

const App = () => {
    return (
        <Router>


            <Routes>
                <Route path="/" element={<Startseite />} />
                <Route path="/To-do" element={<ToDo />} />
                <Route path="/Impressum" element={<Impressum />} />
                <Route path="/Kontakt" element={<Kontakt />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Profil" element={<Profil />} />
            </Routes>
        </Router>
    );
};





export default App;