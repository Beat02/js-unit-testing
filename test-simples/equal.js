const chai=require('chai');
const expect=chai.expect;

describe('Simple test',()=>{
    // // El primer argumento es una descripción de lo que estamos probando, y el segundo es una función que contiene el código del test.
    it('should be equal',()=>{
        const result =2+2;
        expect(result).to.equal(4);
    });
});