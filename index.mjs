import express from 'express';
const app = express();

app.get('/', (req, res) => { // app.METHOD(PATH, HANDLER)
    res.send('was geht ab!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});