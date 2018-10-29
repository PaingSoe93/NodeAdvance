const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi There');
});

const port = process.env.PORT || 5000;

app.listen(5000);