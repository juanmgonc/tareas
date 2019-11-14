const express = require('express');
const router = express.Router();

router.get('/ruta-1', function (req, res) {
  res.send('Estoy sobre la ruta 1.')
});

router.get('/ruta-2', function (req, res) {
  res.send('Estoy sobre la ruta 2.')
});

router.get('/ruta-3', function (req, res) {
  res.send('Estoy sobre la ruta 3.')
});

module.exports = router;