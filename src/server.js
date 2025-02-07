import express from 'express';
import bodyParser from 'body-parser';
import { createClient } from 'redis';
import cors from 'cors';
import session from 'express-session';
import path from 'path';


const app = express();

// Redis-Verbindung einrichten
const client = createClient({
    url: "rediss://default:AZRhAAIjcDEwZWZhNWUyYmIyN2I0OTRjOGE1NzM0YTkyZTU0MTkxOXAxMA@dynamic-unicorn-37985.upstash.io:6379"
});

client.on("error", function (err) {
    console.error('Redis connection error:', err);
    process.exit(1); // Exit the process with an error code
});

await client.connect().catch(err => {
    console.error('Failed to connect to Redis:', err);
    process.exit(1); // Exit the process with an error code
});

// CORS Middleware (Ermöglicht Anfragen von deinem Frontend)
app.use(cors({
    origin: 'http://localhost:63342',  // Ändere dies auf die URL deines Frontends
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

app.use(bodyParser.json());  // Body-Parser für JSON-Daten

app.use(session({
    secret: 'geheime-schluessel', // Geheimer Schlüssel für die Session-Verschlüsselung
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly:true} // Secure auf true setzen, wenn HTTPS genutzt wird
}));

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});


// POST-Route für /addUser
app.post('/addUser', async (req, res) => {
    const { name, email, password, passwordRepeat } = req.body;

    if (password !== passwordRepeat) {
        return res.status(400).json({ message: 'Passwörter stimmen nicht überein.' });
    }

    const userId = Date.now().toString(); // Benutzer-ID erzeugen
    const userData = { name, email, password };

    try {
        await client.set(`user:${userId}`, JSON.stringify(userData));
        res.json({ message: `Benutzer ${userId} hinzugefügt.` });
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Hinzufügen des Benutzers.' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email);

    if (!user) {
        return res.json({ success: false, message: "Benutzer nicht gefunden!" });
    }

    // Überprüfe das Passwort
    if (user.password === password) {
        return res.json({ success: true, message: "Anmeldung erfolgreich" });
    } else {
        return res.json({ success: false, message: "Falsches Passwort!" });
    }
});

app.get("/login", (req, res) => {
    res.send("Login-Route existiert!");
});

app.get('/profil', (req, res) => {
    // Überprüfen, ob der Benutzer angemeldet ist
    console.log("Session-Daten:", req.session.user);
    if (!req.session.user) {
        return res.status(401).json({ message: "Nicht angemeldet!" });
    }

    // Benutzerdaten aus der Session zurückgeben
    res.json({
        name: req.session.user.name,
        email: req.session.user.email,
        id: req.session.user.id,
    });
});




const serverPort = 3000;
app.listen(serverPort, () => {
    console.log(`Server läuft auf Port ${serverPort}`);
});