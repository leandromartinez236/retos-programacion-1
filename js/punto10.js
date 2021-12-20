// Instrucciones: hay 1.609344 km en una milla (mi). Escribe un programa en el que 
// el usuario indique una cantidad de millas y muestre en pantalla el resultado convertido a kilómetros.
// 1 milla = 1.609344 km

const milla = parseFloat(prompt('Cantidad de millas',''));
const km = 1.609344;
const kilometros = milla * km


alert(`En ${milla} millas hay ${kilometros.toFixed(5)} kilometros`)