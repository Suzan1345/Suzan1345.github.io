import React from 'react';
import './style.css';
import {Link} from "react-router-dom"; // Stelle sicher, dass du die CSS-Datei importierst

const TodoPage = () => {
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

// Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

// Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);

// Create a new list item when clicking on the "Add" button
    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
    return (
        <div>

            <div className="container">
                <h1>Deine To-Do Listen</h1>
            </div>

            <div className="toolbar">
                <div className="toolbar-left">
                    <Link to="/">Startseite</Link>
                    <Link className="active" to="/To-do">To-Do</Link>
                </div>
                <div className="toolbar-right">
                    <div className="dropdown">
                        <button className="dropbtn">Profil</button>
                        <Link to="/Profil">Profil</Link>
                        <div className="dropdown-content">
                            <Link to="/Login">Anmelden</Link>
                        </div>
                    </div>
                    <button className="buttonSearch">Suchen</button>
                </div>
            </div>

            <div className="impressum">
                <Link to="/impressum">Impressum</Link>
            </div>
            <div className="kontakt">
                <Link to="/kontakt">Kontakt</Link>
            </div>
            <div id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input type="text" id="myInput" placeholder="Title..."/>
                <span onClick="newElement()" className="addBtn">Add</span>
            </div>

            <ul id="myUL">
                <li>Hit the gym</li>
                <li className="checked">Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs</li>
                <li>Read a book</li>
                <li>Organize office</li>
            </ul>

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
}

export default TodoPage;