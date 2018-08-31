var http = require("http");
// var fs = require("fs");
// var util = require("util");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
    var time;
    function serverTime(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
        () => reject(console.error("Eroor"));
      });
    }
    var interval = setInterval(() => {
      time = new Date().toUTCString();
      console.log(`Today is ${time}`);
    }, 1000);
    serverTime(6000).then(() => {
      clearInterval(interval);
      console.log(`\n Server stopped on ${time}`);
    });
  })

  .listen(8000);
