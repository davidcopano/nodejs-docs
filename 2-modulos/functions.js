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