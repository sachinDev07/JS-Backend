const http = require("http"); // require the http module

const PORT = 800;

// using the createServer function we can actually create a basic http sever using http module.
// This function returns a server object, and takes a callback as an argument.
// this function created a server object but didn't start the sever.
const server = http.createServer(function listener(request, response) {
  /**
   *  request -> we wil able to details ofincoming http request -> object
   * response -> we wiill able to configure what response we need to
   *             send to an incoming http request -> object
   *
   */
  // this callback is a kind of listener that is going to collect
  // every http request that we will make to our server

  if (request.url === "/home") {
    // if we make a request on /home this if block will be executed
    console.log(request.method);
    // if we want to send data in multiple chunks
    response.write("first response");
    response.write("second response");

    response.end("Welcome to home!");
  }

 //  console.log("incoming request details: ", request.url);
 //  console.log("response object details: ", response);
  console.log("Request received");
});

server.listen(PORT, function exec() {
  // once we successfully boot up the server on the given port, this callback will be executed.
  console.log(`Server is Up and running on PORT: ${PORT}`);
});
