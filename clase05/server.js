var http = require("http");
var url = require("url");

function iniciar(route, handle) {

  function onRequest(request, response) {
    var ruta = url.parse(request.url).pathname;
    console.log("Peticion para " + ruta + " recibida");
    console.log("Peticion recibida");

    route(ruta, handle);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.write("<p>Hola Mundo aqui estamos tomando una <b>copichuelas</b></p>");
    response.write("<p>Programa dividido en dos ficheros</p>");
    response.write("<p>Ruta: " + ruta + "</p>");
    response.end();
  }

  http.createServer(onRequest).listen(8888);

  console.log("Servidor Iniciado");
}

exports.iniciar = iniciar;
