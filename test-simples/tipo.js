const chai = require('chai'); //Importamos libreria, necesitamos para usar funciones aserción
const expect = chai.expect; // Extraemos función 'expect' de Chai

describe('Type Test', () => {
    it('should be a string', () => {
        const str = 'Hello, world!';
        expect(str).to.be.a('string'); // Verifica que `str` sea una cadena
    });
    it('should be a number', () => {
        const num = 42;
        expect(num).to.be.a('number'); // Verificamos que 'num' es un número
    });
});