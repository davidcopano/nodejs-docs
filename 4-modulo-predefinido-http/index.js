const http = require('http');

http.createServer((req, res) => {
  res.write('<h1>Hola mundo desde Nodejs</h1>');
  res.end();  
}).listen(3000);


