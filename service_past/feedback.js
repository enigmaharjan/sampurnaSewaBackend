const fetchFeedback = require('../utils/index');

async function createFeedback(data){
    try{
        const result= await fetchFeedback.savefeedback({
    table: 'feedback',
    payload:{
        feedback:data.feedback
    }
    });
    return result;
} catch(error) {
    throw new Error(error);
    }
}

async function getFeedback(){
    try {
      const user = await fetchFeedback.fetchFeedback({
        table: 'feedback',
        payload:'*',
      });
      return user;
    } catch(error) {
      throw new Error(error);
    }
  }

  module.exports ={
    createFeedback:createFeedback,
    getFeedback:getFeedback
}