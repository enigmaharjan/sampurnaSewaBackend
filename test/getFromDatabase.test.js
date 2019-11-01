const { getFromDatabase } = require('../utils/index');


const chai = require('chai');
const expect = chai.expect

describe("Utils Index getFromDatabaseTable function test", () => {
    it('should be a function', () => {
        expect(getFromDatabase).to.be.a('function');
    })

    it('should return data when called', async () => {    
        const table = 'users';
        const payload = '*';
        let data = await getFromDatabase({table, payload});
        let dataRes = await data;
        expect(dataRes).to.be.an('array')
    })

    it('should throw error when required table name is not sent', async () => {
        let data = await getFromDatabase();
        let dataRes = await data;
        expect(dataRes).to.be.an('error')
    })

})