const imagenController = require('../controllers');
const express = require('express');
const router = express.Router();

router.post('/descargar', (req, res) => imagenController(req, res));

module.exports = router;