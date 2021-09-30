const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const db = require('./db');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  await db.schema.createTable('comments', (table) => {
    table.increments('id', { primaryKey: true });
    table.string('ip_address', 500).notNullable();
    table.string('comment').notNullable();
    table.string('episode_id').notNullable();
    table.timestamps(true, true);
  });
  res.status(200).json({ data: 'Welcome to the home endpoint' });
});

app.use('/api/v1', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app is now listening on port ${port}`);
});
