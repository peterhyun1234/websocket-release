// Node.js WebSocket server script
const http = require('http');
const WebSocketServer = require('websocket').server;
const server = http.createServer();


server.listen(8000);
const wsServer = new WebSocketServer({
  httpServer: server
});
wsServer.on('request', function (request) {
  const connection = request.accept(null, request.origin);

  //let ip = request.header['x-fowarded-for'] || request.connection.remoteAddress;

  console.log("Client has connected");

  connection.on('message', function (message) {

    var recvMsg = message.utf8Data;

    console.log("[recvMsg: " + recvMsg + "]");

    if (recvMsg == "start") {
      //console.log("you in if");
      for (var i = 0; i < 10; i++) {
        var result = Math.floor(Math.random() * 10) + 1;
        sleep(1000);
        connection.sendUTF(result);
        console.log("Sending num: " + result);
      }
      console.log("All numbers sent");
    }
  });
  connection.on('close', function (reasonCode, description) {
    console.log('Client has disconnected.');
  });
});

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
