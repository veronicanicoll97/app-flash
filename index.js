const express = require('express');
const bodyParser = require('body-parser');
const { apiRoutes } = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('hello world');
});

apiRoutes(app);
const PORT = 4000;
app.listen(PORT, () => {
    console.log(
        `Servidor app-flash escuchando en el puerto: http://localhost:${PORT}`,
    );
});