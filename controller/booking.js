const bookingService = require('../service/booking');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

async function createBooking(request,response){
    const jobname=request.body.jobname;
    const jobtime=request.body.jobtime;
    const jobdate=request.body.jobdate;
    const jobproblem=request.body.jobproblem;
    const userid=request.body.userid;
    const confirmation = request.body.confirmation;
    const completed=request.body.completed;
    const data = {
        jobname:jobname,
        confirmation:confirmation,
        jobtime:jobtime,
        jobdate:jobdate,
        jobproblem:jobproblem,
        userid:userid,
        completed:completed
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
        const result=await bookingService.getBooking();
        response.json(
            result
        )
}
async function updateBooking(request,response){
    const bookid = request.body.bookid;
    const jobname = request.body.jobname;
    const jobtime=request.body.jobtime;
    const jobdate=request.body.jobdate;
    const jobproblem=request.body.jobproblem;
    const userid=request.body.userid;
    const confirmation=request.body.confirmation;
    const completed=request.body.completed;
    const feedback=request.body.feedback;
    const data = {
        bookid:bookid,
        jobname:jobname,
        jobtime:jobtime,
        jobdate:jobdate,
        jobproblem:jobproblem,
        userid:userid,
        confirmation:confirmation,
        completed:completed,
        feedback:feedback,
       }
    try{
        const result=await bookingService.updateBook(data,bookid);
        response.json({
            status:'success',
            message:"Success",
            data:data
        })
    }catch(error){
        response.json({
            message:'error'
        })
    }
}



module.exports ={
    createBooking:createBooking,
    getBooking:getBooking,
    updateBooking:updateBooking,
}