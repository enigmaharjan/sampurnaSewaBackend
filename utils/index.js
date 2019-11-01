const knex = require('knex');
const config = require('../knexfile');
const dbClient = knex(config);
const Express = require('express');
const express = new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());


async function updateToDatabse({
    table,
  where,
  column,
  payload
}){    
  const data = await dbClient
  .table(table)
  .where(column, where)
  .update(payload)
return data;
}

async function saveToDatabase({
    table,
    payload
}){
  try {
    if(Object.keys(payload).length > 0){
    const data = await dbClient
    .table(table)
    .insert(payload)

  return 'success';
    }
    else{
      return 'failed';
    }
  }
  catch(err){
    return 'failed';
  }
}

async function getFromDatabase({
    table,
    payload
}){
    const data = await dbClient
    .table(table)
    .select(payload)
    return data;
}

async function deleteDatafromDatabase({
    table,
    where,
    column
}){
    const data = await dbClient
    .table(table)
    .where(column, where)
    .del()
  return data;
}


async function authAdm({
  table,
    first
}){
  const email=first;
  const data = await dbClient
  .table(table)
  .first('password')
  .where('email',email)
  return data;
}


async function authUsr({
  table,
  first
}) {
  const email = first;
  const data = await dbClient
    .table(table)
    .first('password')
    .select('userid')
    .where('email', email)
  return data;
}


module.exports = {
  authAdm: authAdm,
  authUsr: authUsr,
  deleteDatafromDatabase: deleteDatafromDatabase,
  saveToDatabase : saveToDatabase,
  getFromDatabase : getFromDatabase,
  updateToDatabse : updateToDatabse
}