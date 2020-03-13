'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger-doc.json');

const app = express();

const mainRoute = require('./routes/main.route');
const storageRoute = require('./routes/storage.route');

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/', mainRoute);
app.use('/storage', storageRoute);

module.exports = app;