const fetchBooking = require('../utils/index');


async function createBooking(data){
    console.log(data.jobname);
    console.log(data.jobtime);
    console.log(data.jobdate);
    console.log(data.jobproblem);
    console.log(data.userid);
    try{
        const result= await fetchBooking.savebook({
    table: 'booking',
    payload:{
        jobname:data.jobname,
        jobtime:data.jobtime,
        jobdate:data.jobdate,
        jobproblem:data.jobproblem,
        userid:data.userid
    }
    });
    return result;
} catch(error) {
    throw new Error(error);
    }
}

async function getBooking(){
    try {
      const user = await fetchBooking.fetchUser({
        table: 'booking',
        payload:'*'
      });
      return user;
    } catch(error) {
      throw new Error(error);
    }
  }

  // async function getBooked(){
  //   try {
  //     const book = await fetchBooking.fetchUserBook({
  //       table: 'booking',
  //       where:data.userid,
  //       payload:'*'
  //     });
  //     return book;
  //   } catch(error) {
  //     throw new Error(error);
  //   }
  // }

  module.exports ={
    createBooking:createBooking,
    getBooking:getBooking,
    // getBooked:getBooked,
 
}