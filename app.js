'use strict'
//IMPORT DECLARATION
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//LOAD ROUTES
const prettifierRoute = require('./routes/prettifierRouter');

//DEFINE ROUTES
app.use(bodyParser.json());
app.use('/prettifier',prettifierRoute);

//EXPORT MODULE
module.exports = app;

