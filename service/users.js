const fetchUser = require('../utils/index');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

async function authUser(email){
  try{
    const usr= await fetchUser.authUsr({
      table:'users',
      first: email
    });
    return usr;
  }catch(error) {
    throw new Error(error);
}
}

async function deleteUser(data){
  try{
    const del = await fetchUser.delUser({
      table: 'users',
      where: data.email,
      payload:{
        email:data.email
      }
    });
  return del;
}catch(error) {
  throw new Error(error)
}
}


  async function updateUser(data){
    try{
    const update = await fetchUser.uptUser({
    table: 'users',
    where : data.userid,
    payload:{
      userid:data.userid,
      name:data.name, 
      username:data.username,      
      password:data.password,
      email:data.email,
      address:data.address,
      phone:data.phone,    
  }
  });
    return update;
  }catch(error) {
    throw new Error(error)
  }
}
async function getUser(){
  try {
    const user = await fetchUser.fetchUser({
      table: 'users',
      payload:'*'
    });
    return user;
  } catch(error) {
    throw new Error(error);
  }
}

async function createUser(data) {
    try {
      const result= await fetchUser.saveUser({
        table: 'users',
        payload:{
        name:data.name,
        username:data.username,       
        password:data.password,
        email:data.email,
        address:data.address,
        phone:data.phone,
        imagename:data.imagename 
        
  
        }
      });
      return result;
    } catch(error) {
      throw new Error(error);
    }
  }

  
  module.exports ={
    createUser: createUser,
    getUser:getUser,
    authUser:authUser,
    updateUser:updateUser,
    deleteUser:deleteUser
}