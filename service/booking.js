const fetchBooking = require('../utils/index');


async function createBooking(data){
    try{
        const result= await fetchBooking.saveToDatabase({
    table: 'booking',
    payload:{
        jobname:data.jobname,
        jobtime:data.jobtime,
        jobdate:data.jobdate,
        jobproblem:data.jobproblem,
        userid:data.userid,
        confirmation:data.confirmation,
        completed:data.completed,
    }
    });
    return result;
} catch(error) {
    throw new Error(error);
    }
}

async function getBooking(){
    try {
      const user = await fetchBooking.getFromDatabase({
        table: 'booking',
        payload:'*',
      });
      return user;
    } catch(error) {
      throw new Error(error);
    }
  }
  async function updateBook(data,bookid){
    try{
    const update = await fetchBooking.updateToDatabse({
    table: 'booking',
    where : bookid,
    column : 'book_id',
    payload:{
      bookid:data.bookid,
      jobname:data.jobname,
      jobtime:data.jobtime,
      jobdate:data.jobdate,
      jobproblem:data.jobproblem,
      userid:data.userid,
      confirmation:data.confirmation,
      completed:data.completed,
      feedback:data.feedback,
  }
  });
    return update;
  }catch(error) {
    throw new Error(error)
  }
}

  module.exports ={
    createBooking:createBooking,
    getBooking:getBooking,
    updateBook:updateBook,
 
}