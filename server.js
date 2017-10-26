var http = require('http');
var fs = require('fs');


//404 response
function send404Response (response) {

    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404 the site does not exists");
    response.end();
}
//handle the request
counter = 0;
function onRequest (request, response) {
    console.log("A user made a request" + request.url);

    if ( request.method == 'GET' && request.url == '/') {

        response.writeHead(200, {"Context-Type": "text/html"})
        fs.createReadStream("./index.html").pipe(response);

        counterAdd();
        console.log(counter);
        } else {
            send404Response(response);
        }


    }

function counterAdd () {
    return counter ++;
}


http.createServer(onRequest).listen(8888);
console.log("server is running on 8888");

console.log(counter);