const express = require('express');
const getComments = require('../controllers/getComments');
const postComments = require('../controllers/postComments');

const commentsRoute = express.Router();

commentsRoute.get('', getComments);

commentsRoute.post('', postComments);
module.exports = commentsRoute;
