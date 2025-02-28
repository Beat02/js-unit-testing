const { assert } = require('chai');

describe('Prueba básica con Mocha y Chai', () => {
    it('2 + 2 debería ser 4', () => {
        assert.equal(2 + 2, 4);
    });
});
