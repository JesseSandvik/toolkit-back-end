const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = require('./config/corsOptions');

const registerRouter = require('./register/register.router');
const requestsRouter = require('./requests/requests.router');

const NotFound = require('./errors/notFound/notFound');
const errorHandler = require('./errors/errorHandler/errorHandler');

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello World!'});
});

app.use('/register', registerRouter);
app.use('/requests', requestsRouter);

app.use(NotFound);

app.use(errorHandler);

module.exports = app;
