const valor1 = prompt('Ingrese un numero');
const valor2 = prompt('Ingrese un numero');
const conv1 = parseFloat(valor1);
const conv2 = parseFloat(valor2);
const suma = conv1 + conv2

alert(`la suma es: ${suma.toFixed(2)}`)

// parsetfloat convierte strings en numero  y toFixed es la cant. de decimales que tomara 