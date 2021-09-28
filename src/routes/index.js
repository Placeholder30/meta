const express = require('express');
const charactersRoute = require('./charactersRoute');
const commentsRoute = require('./commentsRoute');
const moviesRoute = require('./moviesRoute');

const router = express.Router();

router.use('/movies', moviesRoute);
router.use('/comments', commentsRoute);
router.use('/characters', charactersRoute);

//list names of movies,opening crawls and comment counts, adding and listing anonymous comments for a movie
//comment
//list characteres
module.exports = router;
