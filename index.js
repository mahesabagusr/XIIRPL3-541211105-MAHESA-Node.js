const express = require('express');
const router = require('./src/router/router');
const mongoDB = require('./src/config/db');
require('dotenv').config({
    path: '.env'
});

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

mongoDB()
    .then(() => {
        console.log('Successfully Connect to Database')
    })
    .catch((err) => {
        console.error('Failed to connect to the database:', err);;
    });

app.use(router);

const port = process.env.EXPRESS_PORT;

const server = app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

module.exports = { server }