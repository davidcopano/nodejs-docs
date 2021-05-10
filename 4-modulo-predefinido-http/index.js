const http = require('http');

http.createServer((req, res) => {
  
  console.log('request received:', req);
 
  res.write('<h1>Hola mundo desde Nodejs</h1>');
  res.end();  
}).listen(3000, 'localhost', () => {
  console.log('listening');
});


