const num1 = Number(prompt("ingrese un numero mayor a 1000"));
const num2 = Number(prompt("ingrese un numero menor a 100"));

const res = (num1 / num2).toFixed(2);

alert(`En el num ${num1} caben ${res} números similares a ${num2}`);