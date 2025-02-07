document.getElementById('userForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Verhindert die Standardformularübertragung

    // Formulardaten sammeln
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        passwordRepeat: document.getElementById('passwordRepeat').value
    };

    console.log(formData); // Gib die Formulardaten zur Überprüfung aus

    try {
        // HTTP-Request an das Backend senden
        const response = await fetch('http://localhost:3000/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)  // Formulardaten im JSON-Format
        });

        // Antwort verarbeiten
        const result = await response.json();
        alert(result.message);  // Nachricht vom Backend anzeigen
    } catch (error) {
        console.error('Error:', error); // Fehler ausgeben
        alert('Fehler beim Senden der Anfrage!');
    }
});


