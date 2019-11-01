const { authAdm } = require('../utils/index');


const chai = require('chai');
const expect = chai.expect

describe("Utils Index updateDatabaseTable function test", () => {
    it('should be a function', () => {
        expect(authAdm).to.be.a('function');
    })

    it('should return data when called', async () => {    
        const table = 'admin';
        const first = 'abc@a.com';

        let data = await authAdm({table,first});
        let dataRes = await data;
        expect(dataRes).to.be.an('object')
    })

    it('should throw error when required data is not sent', async () => {
        let data = await authAdm('a');
        let dataRes = await data;
        expect(dataRes).to.be.an('error')
    })

})