const feedbackService = require('../service/feedback');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

async function createFeedback(request,response){
    const feedback=request.body.feedback;
    const data = {
        feedback:feedback,
    }
    try{
        const result=await feedbackService.createFeedback(data);

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


async function getFeedback(request,response){   
        const result=await feedbackService.getFeedback();
        response.json(
            result
        )
}
module.exports ={
    createFeedback:createFeedback,
    getFeedback:getFeedback,
}