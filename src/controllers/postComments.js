const requestIp = require('request-ip');
const db = require('../db');

module.exports = async (req, res) => {
  const { comment, episode_id } = req.body;
  const clientIp = requestIp.getClientIp(req);
  const commentsDb = await db('comments')
    .insert({ ip_address: clientIp, comment, episode_id })
    .returning('*');
  res.status(201).json({ data: commentsDb });
};
