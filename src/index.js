import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";  // Hier wird die App importiert

// Holt sich das <div id="root"> aus index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Hier wird die App in das <div id="root"> gerendert
root.render(
    <React.StrictMode>
        <App />  {/* Hier wird die gesamte Anwendung gerendert */}
    </React.StrictMode>
);

app.get('/', (req, res) => { // app.METHOD(PATH, HANDLER)
    res.send('was geht ab!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});