const knex = require('knex');
const config = require('../knexfile');
const dbClient = knex(config);
const Express = require('express');
const express = new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

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

async function fetchAdmin({
  table,
    payload
}){
  const data = await dbClient
  .table(table)
  .select(payload)
  return data;
}

async function saveUser({
  table,
  payload
}) {
  const data = await dbClient
    .table(table)
    .insert(payload)

  return "hello";
}


async function fetchAdmin({
  table,
  payload
}) {
  const data = await dbClient
    .table(table)
    .select(payload)
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

async function delUser({
  table,
  where
}) {
  const data = await dbClient
    .table(table)
    .where('userid', where)
    .del()
  return data;
}

async function uptUser({
  table,
  where,
  payload
}) {
  const data = await dbClient
    .table(table)
    .where('userid', where)
    .update(payload)
  return data;
}

async function uptBook({
  table,
  where,
  payload
}) {
  const data = await dbClient
    .table(table)
    .where('bookid', where)
    .update(payload)
  return data;
}

async function fetchUser({
  table,
  payload
}) {
  const data = await dbClient
    .table(table)
    .select(payload)
  return data;
}

async function fetchFeedback({
  table,
  payload
}) {
  const data = await dbClient
    .table(table)
    .select(payload)
  return data;
}

async function savefeedback({
  table,
  payload
}) {
  const data = await dbClient
    .table(table)
    .insert(payload)
  return;
}
async function saveAdmin({
  table,
  payload
}) {
  const data = await dbClient
    .table(table)
    .insert(payload)
  return data;
}

async function saveJob({
  table,
  payload
}) {
  const data = await dbClient
    .table(table)
    .insert(payload)

  return data;
}



async function delJob({
  table,
  where
}) {
  const data = await dbClient
    .table(table)
    .where('jobid', where)
    .del()
  return data;
}

async function uptJob({
  table,
  where,
  payload
}) {
  const data = await dbClient
    .table(table)
    .where('jobid', where)
    .update(payload)
  return data;
}

async function fetchJob({
  table,
  payload
}) {
  const data = await dbClient
    .table(table)
    .select(payload)
  return data;
}

async function savebook({
  table,
  payload
}) {
  const data = await dbClient
    .table(table)
    .insert(payload)

  return data;
}

module.exports = {
  saveUser: saveUser,
  saveAdmin: saveAdmin,
  fetchAdmin: fetchAdmin,
  fetchUser: fetchUser,
  authAdm: authAdm,
  authUsr: authUsr,
  uptUser: uptUser,
  delUser: delUser,
  saveJob: saveJob,
  fetchJob: fetchJob,
  uptJob: uptJob,
  delJob: delJob,
  savebook:savebook,
  uptBook:uptBook,
  fetchFeedback:fetchFeedback,
  savefeedback:savefeedback
}