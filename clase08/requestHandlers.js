var fs = require('fs');

function inicio() {
    console.log("Manipulador de petición 'inicio' ha sido llamado.");
    return fs.readFileSync("index.html", "utf-8");
}

function contacto() {
    console.log("Manipulador de petición 'contacto' ha sido llamado.");
    return "Marie Curie, 10 - PTA Campanillas (Málaga)";
}

function saluda(nombre) {
    return "<h1>Hola " + nombre + "</h1>";
}

function error404() {
    console.log("Recurso no encontrado");
    return "404 Recurso no encontrado. Compruebe que ha escrito bien la ruta en el navegador";
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.saluda = saluda;
exports.error404 = error404;