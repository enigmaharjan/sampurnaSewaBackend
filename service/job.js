const fetchJob = require('../utils/index');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

async function deleteJob(data,jobid){
  try{
    const del = await fetchJob.delJob({
      table:'jobs',
      where:jobid
    });
    return del;
  }catch(error){
    throw new Error(error);
  }
}


async function updateJob(data,jobid){
  try{
    const upt = await fetchJob.uptJob({
      table: 'jobs',
      where : jobid,
      payload:{
        jobid:data.jobid,
        jobname:data.jobname,
        jobdetail:data.jobdetail,
        minimumcharge:data.minimumcharge,
        jobimage:data.jobimage,
        availability:data.availability,
        }
    });
    return upt;
  }catch(error) {
    throw new Error(error)
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
        jobimage:data.jobimage,
        availability:data.availability,
      }
      });
      return result;
    } catch(error) {
      throw new Error(error);
    }
  }

  
  module.exports ={
    createJob: createJob,
    updateJob:updateJob,
    deleteJob:deleteJob
}