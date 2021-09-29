const { default: axios } = require('axios');
const { STARWARS_BASE_URL } = require('../constants');

module.exports = async (req, res) => {
  const { sort_by, dsc, filter } = req.query;

  try {
    let { data } = await axios.get(`${STARWARS_BASE_URL}/people`);
    data = data.results;

    if (Object.entries(req.query).length === 0) {
      return res.status(200).json({ data });
    }
    if (filter === 'male' || filter === 'female' || filter === 'n/a') {
      const filtered = data.filter((item) => {
        if (item.gender === filter) {
          return item;
        }
      });
      data = filtered;
    }

    if (sort_by === 'height') {
      let sortedData;
      if (dsc === 'true') {
        sortedData = data.sort((a, b) => a.height - b.height);
      } else {
        sortedData = data.sort((a, b) => b.height - a.height);
      }
      return res.status(200).json({ data: sortedData });
    }

    if (sort_by === 'gender') {
      let sortedData;

      if (dsc === 'true') {
        sortedData = data.sort((a, b) => a.gender - b.gender);
      } else {
        sortedData = data.sort((a, b) => b.gender - a.gender);
      }
      return res.status(200).json({ data: sortedData });
    }
    if (sort_by === 'name') {
      let sortedData;
      if (dsc === 'true') {
        sortedData = data.sort((a, b) => a.name - b.name);
      } else {
        sortedData = data.sort((a, b) => b.name - a.name);
      }
      return res.status(200).json({ data: sortedData });
    }
    res.status(400).json({ message: 'please enter a valid sort parameter' });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'there was an error making that request, please try again',
    });
  }
};
