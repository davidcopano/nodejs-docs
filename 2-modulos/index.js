const exampleModule = require('./example-module.js');

console.log('Suma: ', exampleModule.math.add(9, 5));
console.log('Resta: ', exampleModule.math.substract(6, 8));
console.log('Multiplicacion: ', exampleModule.math.multiply(4, 7));
console.log('Division: ', exampleModule.math.divide(6, 3));

exampleModule.hello('David');

console.log(exampleModule.variablePrueba);
