const { deleteDatafromDatabase } = require('../utils/index');


const chai = require('chai');
const expect = chai.expect

describe("Utils Index updateDatabaseTable function test", () => {
    it('should be a function', () => {
        expect(deleteDatafromDatabase).to.be.a('function');
    })

    it('should delete data when called', async () => {    
        const table = 'admin';
        const where = 'abc@a.com';
        const column = 'email';

        let data = await deleteDatafromDatabase({table,where,column});
        let dataRes = await data;
        expect(dataRes).to.be.an('number')
    })

    it('should throw error when required data is not sent', async () => {
        let data = await deleteDatafromDatabase('a');
        let dataRes = await data;
        expect(dataRes).to.be.an('error')
    })

})