const pago = parseFloat (prompt('Ingrese el monto a pagar', ''));
const personas = parseFloat (prompt('Cuantas personas pagarán la cuenta', ''));
const propina = parseFloat (prompt('Propina', ''));

const impuesto = (pago * 20) / 100;
const pagototal = pago + propina + impuesto
const personapagar = pagototal / personas 


alert(`Pago total es ${pagototal.toFixed(2)} y cada uno debera pagar ${personapagar.toFixed(2)}` )
