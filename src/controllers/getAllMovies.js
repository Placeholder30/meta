const { STARWARS_BASE_URL } = require('../constants');
const axios = require('axios').default;
const { countComments } = require('../helpers/filterMoviesData');
module.exports = async function (req, res) {
  try {
    const { data } = await axios.get(`${STARWARS_BASE_URL}/films`);

    const moviesWithCommentCount = await countComments(data.results);

    res.status(200).json({ data: moviesWithCommentCount });
  } catch (error) {
    res.status(500).json({ message: 'an error occured' });
  }
};
