var http = require('http');

var server = http.createServer(function(request, response) {
  console.log("ROUTE: " + request.method + " " + request.url);
  var route = request.method + " " + request.url;
  var output = "";
  if (route === "GET /") {
    response.setHeader('Content-type', 'text/plain');
    output += "You requested the root route.";
  } else {
    response.setHeader('Content-type', 'text/html');
    output += "<p>You requested the route " + route + "</p>";
  }
  response.statusCode = 200;
  response.end(output);  
});

server.listen(3000, function() {
  console.log("Server started on port 3000");
});
