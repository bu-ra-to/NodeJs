var http = require('http');

var server = new http.Server((req, res) => {
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  res.on('error', (err) => {
    console.error(err);
  });
  if (req.url === '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'image/x-icon' });
    res.end();
    return
  }
  else if (req.method === "GET") {
    var time;
    setTimeout(() => {
      clearInterval(interval)
      console.log(`\n Server stopped at ${time}`)
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<html><body><h1>${time}</h1></body></html>`);
    }, 5000)
    var interval = setInterval(() => {
      time = new Date().toUTCString();
      process.stdout.clearLine()
      process.stdout.cursorTo(0)
      process.stdout.write(`Current time is ${time}`);
    }, 1000);
  }
});
server.listen(3000, () => { console.log("I'm Listenning...") })