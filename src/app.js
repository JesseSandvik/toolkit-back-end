const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = require('./config/corsOptions');

const registerRouter = require('./register/register.router');

const NotFound = require('./errors/notFound/NotFound');
const errorHandler = require('./errors/errorHandler/ErrorHandler');

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello World!'});
});

app.use('/register', registerRouter);

app.all('*', NotFound);

app.use(errorHandler);

module.exports = app;
