const request = require('request');
const https = require("https");


function makeServerRequest(callback) {
var url = "http://api.themoviedb.org/3/discover/movie?api_key=5a4f97d81e4c916589c1286921cd7227&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&year=1957"
  request(url, function(error, response, body) {

    if (error) {
      console.log('error:', error);
    } else {
      callback(body);
    }
  });

};

//respObject["results"];

module.exports = makeServerRequest;
