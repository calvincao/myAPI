const express = require('express');
const nestedTree = require('./controllers/nestedTree');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.status(200).send('welcome to my api');
});

app.get('/nested', nestedTree.get, (req, res) => {
  res.status(200).send(res.locals.list);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
