var http = require("http");
var url = require("url");
var querystring = require("querystring");

function iniciar(route, handle) {

  function onRequest(request, response) {
    var ruta = url.parse(request.url).pathname;
    var urlEnArray = request.url.split('?');
    var cadenaDatos = urlEnArray[1];
    var nombre = querystring.parse(cadenaDatos)["nombre"];
    console.log("Peticion para " + ruta + " recibida");
    console.log("Peticion recibida");

    var contenido = route(ruta, handle, nombre);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(contenido);
    response.end();
  }

  http.createServer(onRequest).listen(8888);

  console.log("Servidor Iniciado en http://localhost:8888");
}

exports.iniciar = iniciar;
