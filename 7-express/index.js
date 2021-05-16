const http = require('http');
const colors = require('colors');

const handleServer = ((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hola mundo desde Nodejs</h1>');
  res.end();
});

const server = http.createServer(handleServer);

server.listen(3000, () => {
  console.log('Listening on port 3000'.yellow);
});


