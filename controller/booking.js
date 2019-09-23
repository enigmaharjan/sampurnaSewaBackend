const bookingService = require('../service/booking');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

async function createBooking(request,response){
    console.log(request.body.jobname);
    const jobname=request.body.jobname;
    const jobtime=request.body.jobtime;
    const jobdate=request.body.jobdate;
    const jobproblem=request.body.jobproblem;
    const userid=request.body.userid;
    const data = {
        jobname:jobname,
        jobtime:jobtime,
        jobdate:jobdate,
        jobproblem:jobproblem,
        userid:userid,
    }
    try{
        const result=await bookingService.createBooking(data);

        response.json({
            status:'success',
            message:'Success',
            data:data
        })
    }catch(error){
        response.json({
            status:'fail'
        })
    }
}


async function getBooking(request,response){

    console.log("hit user");
   
        const result=await bookingService.getBooking();
        console.log(result)
        response.json(
            result
        )
}

// async function getBooked(request,response){
//     const userid= request.body.userid;
//     console.log(userid);
//     const data = {
//         userid:userid
//     }
//     try{
//     const result=await bookingService.getBooked();
//     response.json({
//         status:'success',
//         message:"success",
//         data:data
//     })
// }catch(error){
//     response.json({
//         message:'error'
//     })
// }
// }


module.exports ={
    createBooking:createBooking,
    getBooking:getBooking,
    // getBooked:getBooked,
}