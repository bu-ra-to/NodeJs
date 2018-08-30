var http = require('http');
var fs = require('fs')

var server = new http.Server(function (req, res) {
    fs.readFile('./index.html', function (error, data) {
        if (error) {
            res.writeHead(404);
            res.end('Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data, 'utf-8');
        }
    });
    var interval = setInterval(() => {
        var time = new Date().toLocaleTimeString();
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
        process.stdout.write(`Current time is ${time}`);
    }, 1000);
    setTimeout(() => {
        clearInterval(interval)
    }, 10000)

})
server.listen(3000);






