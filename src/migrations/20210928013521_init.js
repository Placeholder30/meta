exports.up = async function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id', { primaryKey: true });
    table.string('ip_address', 500).notNullable();
    table.string('comment').notNullable();
    table.string('episode_id').notNullable()
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('comments');
};
