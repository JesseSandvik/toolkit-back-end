const express = require('express');
const router = express.Router();
const controller = require('./register.controller');
const methodNotAllowed = require('../errors/methodNotAllowed/methodNotAllowed');

router.post('/', controller.create);
router.all(methodNotAllowed);

module.exports = router;
