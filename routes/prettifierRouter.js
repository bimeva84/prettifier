'use strict'

// IMPORT LIBRARIES
const express = require('express');
const prettifierController = require('../controllers/prettifierController');

const api = express.Router();

api.get('/prettify', prettifierController.prettifyNumber);

//EXPORT MODULE
module.exports = api;