// creamos un objeto Math, sin propiedades

const Math = {};

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

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

// con las palabras clave 'module.exports', exportamos el objeto Math para que pueda ser usado por otros archivos

module.exports = Math;