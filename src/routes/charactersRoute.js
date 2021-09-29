const express = require('express');
const getCharacters = require('../controllers/getCharacters');

const charactersRoute = express.Router();

charactersRoute.get('', getCharacters);

module.exports = charactersRoute;
