const express = require('express');
const nestedTree = require('./controllers/nestedTree');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('welcome to my api');
});

app.get('/nested', nestedTree.get, (req, res) => {
  res.status(200).send(res.locals.list);
});

app.use('/*', (req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
