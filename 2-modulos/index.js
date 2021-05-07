// importamos el módulo completo en una variable, con la función clave 'require'
// a la función 'require' se le pasa como parámetro el archivo hecho por nosotros a usar
const exampleModule = require('./example-module.js');

// con la variable anterior, usamos y mostramos el valor de sus funciones y variables

console.log('Suma:', exampleModule.math.add(9, 5));
console.log('Resta:', exampleModule.math.substract(6, 8));
console.log('Multiplicacion:', exampleModule.math.multiply(4, 7));
console.log('Division:', exampleModule.math.divide(6, 3));

exampleModule.hello('David');

console.log(exampleModule.variablePrueba);

console.log(exampleModule.arrayPrueba);