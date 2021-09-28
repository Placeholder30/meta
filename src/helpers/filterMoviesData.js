const db = require('../db');

const countComments = async (movies) => {
  const moviesWithCommentCount = await Promise.all(
    movies.map(async (movie) => {
      const count = await db('comments')
        .count('episode_id')
        .where({ episode_id: movie.episode_id });

      return {
        movie: movie.title,
        episode_id: movie.episode_id,
        opening_crawl: movie.opening_crawl,
        comments_count: count[0].count,
        release_date: movie.release_date,
      };
    })
  );
  const sortedComments = moviesWithCommentCount.sort(
    (a, b) => new Date(a.release_date) - new Date(b.release_date)
  );
  return sortedComments;
};
module.exports = { countComments };
