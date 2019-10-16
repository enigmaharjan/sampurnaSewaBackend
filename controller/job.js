const jobService = require('../service/job');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const SECRET_KEY ='secret_key';
const jwtMiddle=require('express-jwt-middleware');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());
const knex = require('knex');
const config = require('../knexfile');
const dbClient = knex(config);

async function  getJob(request,response){
        const result=await jobService.getJob();
        response.json(
            result
        )
}

async function deleteJob(request,response){
    const jobid = request.body.jobid;
    console.log(jobid);
    const data ={
        jobid:jobid
    }
    try{
        const result=await jobService.deleteJob(data,jobid);
        response.json({
            status:'success',
            message: 'success',
            data:data
        })
    }catch(error){
        response.json({
            message:'fail'
        })
    }
}

async function updateJob(request,response){
    const jobid= request.body.jobid;
    const jobname = request.body.jobname;
    const jobdetail = request.body.jobdetail;
    const minimumcharge = request.body.minimumcharge;
    const jobimage = request.body.jobimage;
    const data = {
        jobid:jobid,
        jobname:jobname,
        jobdetail:jobdetail,
        minimumcharge:minimumcharge,
        jobimage:jobimage
    }
    try{
        const result=await jobService.updateJob(data);
        response.json({
            status:'success',
            message:"success",
            data:data
        })
    }catch(error){
        response.json({
            message:'error'
        })
    }
}

async function createJob(request,response){
    const jobname = request.body.jobname;
    const jobdetail = request.body.jobdetail;
    const minimumcharge = request.body.minimumcharge;
    const jobimage = request.body.jobimage;
    const data = {
        jobname:jobname,
        jobdetail:jobdetail,
        minimumcharge:minimumcharge,
        jobimage:jobimage
    }    
    try{
        const result=await jobService.createJob(data);
        response.json({
            status:'success',
            message:'Successfully Registered',
            data:data
        })
    }catch(error){
        response.json({
            message:'fail'
        })
    }
}
module.exports ={
    createJob:createJob,
    getJob:getJob,
    updateJob:updateJob,
    deleteJob:deleteJob
}