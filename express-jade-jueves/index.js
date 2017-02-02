var express = require('express');
var app = express();

var persona = {
    nombre: "Aitor",
    apellidos: "Menta"
}

var direccion = {
    direccion: "Marie Curie, 10 - PTA, Campanillas (Málaga)"
}

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/contacto', function (req, res) {
  res.render('contacto', direccion);
});

app.get('/usuarios', function (req, res) {
  res.render('usuarios',persona);
});

app.get('/saluda/:nombre', function (req, res) {
    var datos = {
        "nombre": req.params.nombre
    };
    res.render('saluda',persona);
});

app.get('/formulario', function (req, res) {
  res.render('formulario',persona);
});

app.listen(8080);