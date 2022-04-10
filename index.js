const express = require('express');
const app = express();

app.use(express.json());

app.use('/', (req, res) => {
  res.status(200).json({message: 'Hello World!'});
});

app.all('*', (req, res) => {
  res.status(404).json({error: '404 Not Found'});
});

module.exports = app;
