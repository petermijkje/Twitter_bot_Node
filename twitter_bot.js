require('dotenv').config()
const Twitter = require('twitter');

//add developer keys. 
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

Twitter.get 

//status is the body of your message
client.post('statuses/update', {status: 'This message was sent from my terminal!'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});