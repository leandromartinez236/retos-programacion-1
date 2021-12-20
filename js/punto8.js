// Instrucciones: vas con tus amigos a tu restaurante favorito y acuerdan dividir la cuenta.
// Para facilitar las cosa pedirás al usuario que indique el total a pagar, entre cuantas personas se dvidirá la cuenta,
//  porcentaje de propina a incluir, un porcentaje de impuestos,
//  total a pagar incluyendo propina más impuestos y el total a pagar por cada persona.

const pago = parseFloat (prompt('Ingrese el monto a pagar', ''));
const personas = parseFloat (prompt('Cuantas personas pagarán la cuenta', ''));
const propina = parseFloat (prompt('Propina', ''));

const impuesto = (pago * 20) / 100;
const pagototal = pago + propina + impuesto
const personapagar = pagototal / personas 


alert(`Pago total es ${pagototal.toFixed(2)} y cada uno debera pagar ${personapagar.toFixed(2)}` )
