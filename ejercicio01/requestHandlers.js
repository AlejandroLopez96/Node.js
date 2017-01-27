var fs = require('fs');

function inicio() {
    return fs.readFileSync("index.html", "utf-8");
}

function contacto() {
    return fs.readFileSync("contacto.html", "utf-8");
}

function producto() {
    return fs.readFileSync("producto.html", "utf-8");
}

function error404() {
    console.log("Recurso no encontrado");
    return "404 Recurso no encontrado. Compruebe que ha escrito bien la ruta en el navegador";
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.producto = producto;
exports.error404 = error404;