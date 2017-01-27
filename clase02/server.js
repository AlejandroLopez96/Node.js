var http = require("http");

function iniciar() {

  function onRequest(request, response) {
    console.log("Peticion Recibida");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.write("<p>Hola Mundo aqui estamos tomando una <b>copichuelas</b></p>");
    response.write("<p>Programa dividido en dos ficheros</p>");
    response.end();
  }

  http.createServer(onRequest).listen(8888);

  console.log("Servidor Iniciado");
}

exports.iniciar = iniciar;
