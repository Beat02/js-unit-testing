const chai = require('chai');
const expect = chai.expect;

console.log("Ejecutando pruebas con Chai...");

describe('Prueba con Chai', function () {
    it('2 + 2 debería ser 4', function () {
        expect(2 + 2).to.equal(4);
    });
});
