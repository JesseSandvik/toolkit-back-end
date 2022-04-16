const express = require('express');
const methodNotAllowed = require('../errors/methodNotAllowed/methodNotAllowed');
const router = express.Router();
const controller = require('./commitments.controller');

router
    .get('/', controller.list)
    .all(methodNotAllowed);

    module.exports = router;