const Express = require('express');
const express= new Express();
const bodyParser = require('body-parser');
// connection factory
const knex = require('knex');
const pg = require ('pg');
const cors= require('cors');
const config = require('./knexfile.js');
const dbClient = knex(config);
var path = require('path');
const userController=require('./controller/users')
const adminController=require('./controller/admin')
const jobController=require('./controller/job')
const bookingController=require('./controller/booking')

express.use(bodyParser.json());
express.use(cors());
const jwt=require('jsonwebtoken');
const SECRET_KEY = 10;
// var uploadRouter = require('./upload.js');
express.use(Express.static(path.join(__dirname, 'public')));


express.delete('/api/v1/user', userController.deleteUser);
express.put('/api/v1/user', userController.updateUser);
express.get('/api/v1/user', userController.getUser);
express.post('/api/v1/user', userController.createUser);
express.post('/api/v1/authuser', userController.authUser);

express.delete('/api/v1/job', jobController.deleteJob);
express.put('/api/v1/job', jobController.updateJob);
express.get('/api/v1/job', jobController.getJob);
express.post('/api/v1/job', jobController.createJob);

express.get('/api/v1/admin', adminController.getAdmin);
express.post('/api/v1/admin', adminController.createAdmin);
express.post('/api/v1/authadmin', adminController.authAdmin);

express.post('/api/v1/booking', bookingController.createBooking);
express.get('/api/v1/booking', bookingController.getBooking);
// express.get('/api/v1/booked', bookingController.getBooked);

express.get('/api/v1/booked/:userid', getBooked);
express.get('/api/v1/user/:userid', getuserbyid);

async function getuserbyid(request,response){
    const data = await dbClient('users').where('userid',request.params.userid).select("*");
     response.json(
         data
     )
     console.log(data)
}

async function getBooked(request,response){
    console.log(request.params.userid)
    const data = await dbClient('booking').where('userid',request.params.userid).select("*");
     response.json(
         data
     )
     console.log(data)
}

express.listen(5000,'localhost',()=>{
    console.log("running on port 5000")
})
