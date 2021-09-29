const Joi = require('joi');

exports.commentsSchema = Joi.object({
  comment: Joi.string().min(5).required(),
  episode_id: Joi.string().required(),
});
