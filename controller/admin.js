
const adminService = require('../service/admin');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const SECRET_KEY ='secret_key';
const jwtMiddle=require('express-jwt-middleware');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

async function authAdmin(request, response, next) {
    const email = request.body.email;
    const password = request.body.password;
    const result = await adminService.authAdmin(email);
    if (result == undefined) {
        response.json({
            message: "user not found"
        })
    }
    else {
        const passwordFromJson = result.password;
        console.log(passwordFromJson)
        const isMatch = bcrypt.compareSync(password, passwordFromJson);
        if (isMatch) {
            const accessToken = jwt.sign({
                email: email,

            }, SECRET_KEY);
            response.json({
                status: 'true',
                data: result,
                accessToken: accessToken
            })
        } else {
            response.json({
                status: 'wrong credintial',
            })
        }
    }
}


async function  getAdmin(request,response){

    console.log("hit");
   
        const result=await adminService.getAdmin();
        response.json({
            status:'success',
            data2:result
        })
}

async function createAdmin(request,response){
    console.log(request.body.email);
    const email=request.body.email;
    const password = request.body.password;
    const hashedPassword=bcrypt.hashSync(password,10);
    const data = {
        email:email,
        password:hashedPassword
    }
    try{
        const result=await adminService.createAdmin(data);
        response.json({
            status:'success',
            data:data
        })
    }catch(error){
        response.json({
            status:'fail'
        })
    }
}
module.exports ={
    createAdmin: createAdmin,
    getAdmin: getAdmin,
    authAdmin:authAdmin

}