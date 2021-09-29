const db = require('../db');

module.exports = async (req, res) => {
  const comments = await db('comments')
    .select('id', 'ip_address', 'comment', 'episode_id', 'created_at')
    .orderBy('id', 'desc');

  res.status(200).json({ data: comments });
};
