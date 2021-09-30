const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const db = require('./db');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ data: 'Welcome to the home endpoint' });
});

app.use('/api/v1', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app is now listening on port ${port}`);
});
