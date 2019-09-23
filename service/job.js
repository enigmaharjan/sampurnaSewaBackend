const fetchJob = require('../utils/index');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

async function deleteJob(data){
  try{
    const del = await fetchJob.delJob({
      table:'jobs',
      where:(data.jobid)
    });
    return del;
  }catch(error){
    throw new Error(error);
  }
}


async function updateJob(data){
  try{
    const upt = await fetchJob.uptJob({
      table: 'jobs',
      where : data.jobid,
      payload:{
        jobid:jobid,
        jobname:jobname,
        jobdetail:jobdetail,
        minimumcharge:minimumcharge,
        jobimage:jobimage
        }
    });
    return upt;
  }catch(error) {
    throw new Error(error)
  }
}
async function getJob(){
  try {
    const job = await fetchJob.fetchJob({
      table: 'jobs',
      payload:'*'
    });
    return job;
  } catch(error) {
    throw new Error(error);
  }
}

async function createJob(data) {
    try {
      const result= await fetchJob.saveJob({
        table: 'jobs',
        payload:{
        jobname:data.jobname,
        jobdetail:data.jobdetail,
        minimumcharge:data.minimumcharge,
        jobimage:data.jobimage
      }
      });
      return result;
    } catch(error) {
      throw new Error(error);
    }
  }

  
  module.exports ={
    createJob: createJob,
    getJob:getJob,
    updateJob:updateJob,
    deleteJob:deleteJob
}