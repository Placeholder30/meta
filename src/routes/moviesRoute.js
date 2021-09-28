const express = require('express');
const getAllMovies = require('../controllers/getAllMovies');
const moviesRoute = express.Router();

moviesRoute.get('', getAllMovies);

module.exports = moviesRoute;
