const express = require('express');
const router = express.Router();
const controller = require('./requests.controller');
const methodNotAllowed = require('../errors/methodNotAllowed/methodNotAllowed');

router
    .route('/')
    .get(controller.list)
    .all(methodNotAllowed);

    module.exports = router;