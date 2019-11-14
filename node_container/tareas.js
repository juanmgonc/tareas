const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./modulos/bd');
const app = express();

function query(query, res) {
  connection.query(query, function(err, results, fields) {
    res.send(results);
  });
}

app.use(cors());
app.use(bodyParser.json());

app.get('/home', function(req, res) {
  res.send('Bienvenido!');
});

app.get('/tareas', function(req, res) {
  query('SELECT * FROM tarea', res);
});

app.get('/tareas/:id_tarea', function(req, res) {
  res.send('¡Te devuelvo la tarea ' + req.params.id_tarea + '!');
});

app.listen(8080, function() {
  console.log('Iniciado el server correctamente');
});
