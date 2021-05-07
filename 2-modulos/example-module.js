// creamos un objeto Math, sin propiedades

const math = {};

// declaramos las funciones que se van a exportar en el objeto Math

function add(x1, x2) {
  return x1 + x2;
}

function substract(x1, x2) {
  return x1 - x2;
}

function multiply(x1, x2) {
  return x1 * x2;
}

function divide(x1, x2) {
  if(x2 === 0) {
    console.log('No es posible dividir entre 0');
    return;
  }
  return x1 / x2;
}

// asignamos al objeto Math las funciones de antes

math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;

// con las palabras clave 'module.exports', exportamos el objeto Math para que pueda ser usado por otros archivos
// con 'module.exports', podemos exportar múltiples tipos de variables (variables, funciones, objetos, arrays, etc)

function hello(name) {
  console.log('Hola', name);
}

module.exports = {
  math: math,
  hello: hello,
  variablePrueba: 'esto es una variable de prueba',
  arrayPrueba: [1, 2, 3]
};
