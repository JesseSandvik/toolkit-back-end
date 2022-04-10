const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');

const corsOptions = require('./config/corsOptions');

const users = [];

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello World!'});
});

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: new Date().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
  } catch (error) {
    console.error(error);
  }
  console.log(users);
  res.status(201).json(users);
});

app.all('*', (req, res) => {
  res.status(404).json({error: '404 Not Found'});
});

module.exports = app;
