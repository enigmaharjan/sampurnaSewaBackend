const userService = require('../service/users');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const SECRET_KEY ='secret_key';
const jwtMiddle=require('express-jwt-middleware');
const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

async function authUser(request, response, next) {
    const email = request.body.email;
    const password = request.body.password;
    const result = await userService.authUser(email);
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
                userid: result.userid,
                name:result.name,
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

async function  getUser(request,response){

    console.log("hit user");
   
        const result=await userService.getUser();
        console.log(result)
        response.json(
            result
        )
}



async function  deleteUser(request,response){
 const data={
        email:request.body.email
    }
    try{
        const result=await userService.deleteUser(data);
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

async function updateUser(request,response){
    console.log("done");
    const userid = request.body.userid;
    const name = request.body.name;
    const password = request.body.password;
    const username = request.body.username;
    const email = request.body.email;
    const phone = request.body.phone;
    const address = request.body.address;
    const hashedPassword=bcrypt.hashSync(password,10);
    const data = {
        userid:userid,
        name:name,
        username:username,
        password:hashedPassword,
        email:email,
        phone:phone,
        address:address,
       }
    try{
        const result=await userService.updateUser(data);
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

async function createUser(request,response){
    console.log('hit');
    console.log(request.body.name);
    const userid = request.body.userid;
    const name = request.body.name;
    const username = request.body.username;
    const password = request.body.password;
    const email = request.body.email;
    const phone = request.body.phone;
    const address = request.body.address;
    const imagename = request.body.imagename;
    const hashedPassword=bcrypt.hashSync(password,10);
    const data = {
        userid:userid,
        name:name,
        username:username,
        email:email,
        phone:phone,
        address:address,
        password:hashedPassword,
        imagename:imagename
        
    }    
    try{
        const result=await userService.createUser(data);
        response.json({
            status:'success',
            message:'Successfully Registered',
            data:data
        })
    }catch(error){
        response.json({
            message:'Email id already registered'
        })
    }
}


module.exports ={
    createUser: createUser,
    getUser:getUser,
    authUser:authUser,
    updateUser:updateUser,
    deleteUser:deleteUser
}