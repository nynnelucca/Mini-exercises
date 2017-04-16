console.log("uo"); 

var Twit = require ('twit'); 

var T = new Twit({
  consumer_key:         '7OvZfCadOAf0kyjW7LThThfvE',
  consumer_secret:      'Pmrd9Lu0wEkkb0YWbLWj4F8cHopa9krTuBsFje6mGhd433zMJb',
  access_token:         '853256727294291968-nAxaPCUXIABIYJPCTOvpfL1OeDIiPQP',
  access_token_secret:  'yF6CDdSmf522jbeNoVQt25smkLf8569CBwtHAmyqZuQRK',
  timeout_ms:           60*1000,
});

//Setting up a user stream
//T. is a reference to my connection to the API
var stream = T.stream('user'); 


setInterval(tweetIt, 1000*50) //tweets every 20 second 
tweetIt(); //function

function tweetIt() {
    var words = ["the future is bright", "the future is lost", "the future is now", "think it all over", "Lacie 4.2", "rateme.social", "you chose to fade away"]; 
    
    var word = words[Math.floor(Math.random() * words.length)];
    
    var tweet = {
    status: word + ' #floatingexperiences'

    }

    T.post('statuses/update', tweet, tweeted); //the function to post 
 
    function tweeted(err, data, response) {
    if (err) {
    console.log("Something went wrong"); //appears in Terminal 
    } else {
    console.log("IT WORKED!!");
        }  
    }
}

