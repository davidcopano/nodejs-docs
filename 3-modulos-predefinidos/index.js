const os = require('os');
const fs = require('fs');

console.log(os.platform());
console.log(os.release());
console.log('freemem:', os.freemem(), 'bytes');
console.log('totalmem:', os.totalmem(), 'bytes');

console.log('---------------------');

fs.writeFile('./texto.txt', 'linea uno', (err) => {
  if(err) {
    console.log(err);
  }
  console.log('Archivo creado');
});

console.log('ultima linea de codigo');