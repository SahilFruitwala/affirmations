const express = require('express');
const cors = require('cors');
const getRandomAffirmation = require('./random_affirmation');

const app = express();

app.use(cors());

let PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({affirmation: getRandomAffirmation()});
});

const server = app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));

module.exports = server;
