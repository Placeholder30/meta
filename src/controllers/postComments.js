const requestIp = require('request-ip');
const db = require('../db');
const { commentsSchema } = require('../reqSchema');

module.exports = async (req, res) => {
  const { comment, episode_id } = req.body;
  const { error } = commentsSchema.validate({ comment, episode_id });
  if (error) {
    res.status(400).json({ message: error.message });
  }
  const clientIp = requestIp.getClientIp(req);
  const commentsDb = await db('comments')
    .insert({ ip_address: clientIp, comment, episode_id })
    .returning('*');
  res.status(201).json({ data: commentsDb });
};
