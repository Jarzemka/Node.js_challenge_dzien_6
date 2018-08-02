const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());

app.use(express.static('./public/zadanie01/'));

app.post('/sciezka/w/backendzie', (req, res) => {
    const {number1, number2} = req.body;
    res.send('rezultat: ');
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});