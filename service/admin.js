const fetchAdmin = require('../utils/index');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());


async function authAdmin(email){
    try{
      const adm= await fetchAdmin.authAdm({
        table:'admin',
        first: email
      });
      return adm;
    }catch(error) {
      throw new Error(error);
  }
}


async function getAdmin(){
    try {
      const admin = await fetchAdmin.fetchAdmin({
        table: 'admin',
        payload:'*'
      });
      return admin;
    } catch(error) {
      throw new Error(error);
    }
  }

async function createAdmin(data) {
    try {
      const result= await fetchAdmin.saveAdmin({
        table: 'admin',
        payload:{
        email:data.email,
        password:data.password,
        }
      });
      return result;
    } catch(error) {
      throw new Error(error);
    }
  }

  module.exports ={
    createAdmin: createAdmin,
    getAdmin:getAdmin,
    authAdmin:authAdmin
}