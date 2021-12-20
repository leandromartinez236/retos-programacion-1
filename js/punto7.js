const nombre = prompt('Ingrese su nombre', '');
const edad = parseFloat (prompt('Ingrese su edad', ''));

const menos = edad - Number(1)
const mas = edad + Number(1)

alert(`${nombre} el año pasado tenias ${menos} años y el proximo año cumplirás ${mas} `)