const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('freemem:', os.freemem());
console.log('totalmem:', os.totalmem());
