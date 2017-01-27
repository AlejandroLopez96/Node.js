var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.write("<p>Hola Mundo aqui estamos tomando una <n>copichuelas</n></p>");
  response.end();
}).listen(8888);