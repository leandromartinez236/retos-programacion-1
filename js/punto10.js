const milla = parseFloat(prompt('Cantidad de millas',''));
const km = 1.609344;
const kilometros = milla * km


alert(`En ${milla} millas hay ${kilometros.toFixed(5)} kilometros`)