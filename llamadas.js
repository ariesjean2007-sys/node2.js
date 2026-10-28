const modulo=require("./calcularIMC") // Hace el llamado a la funcion exportado

const pesoPrueba=65;
const alturaPrueba=1.75;


console.log("IMC Versión 1.0");
const instructor=modulo.cacularIMC_1_0(pesoPrueba,alturaPrueba);
console.log(`el IMC V1.0 es: ${instructor.toFixed(2)}`);


console.log("IMC Versión 2.0");
const instructor2=modulo.cacularIMC_2_0(pesoPrueba,alturaPrueba);
console.log(`El IMC V2 es: ${instructor2.toFixed(2)}`);


console.log("IMC Versión 3.0");
modulo.cacularIMC_3_0(pesoPrueba,alturaPrueba);