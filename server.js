const express = require('express');
const bodyParser = require('body-parser');
const { Redis } = require('@upstash/redis');

const app = express();
app.use(bodyParser.json());


const redis = new Redis({
    url: 'https://dynamic-unicorn-37985.upstash.io',
    token: 'AZRhAAIjcDEwZWZhNWUyYmIyN2I0OTRjOGE1NzM0YTkyZTU0MTkxOXAxMA',
});

app.post('/addUser', async (req, res) => {
    const { name, email, password } = req.body;
    const userId = Date.now().toString(); // Generate a unique user ID
    const userData = { name, email, password };

    try {
        await redis.set(`user:${userId}`, JSON.stringify(userData));
        res.json({ message: `Benutzer ${userId} hinzugefügt.` });
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Hinzufügen des Benutzers.' });
    }
});

app.listen(3000, () => {
    console.log('Server läuft auf Port 3000');
});