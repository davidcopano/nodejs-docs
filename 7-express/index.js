const colors = require('colors');
const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('<h1>Hola mundo con Express y Node</h1>');
})

server.listen(3000, () => {
  console.log('Listening on port 3000'.red)
});