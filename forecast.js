const request = require('request');

const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=d8abe496e48570c10749abafee9dfd0f&query='+latitude+','+longitude+'&units=f';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("unable to connect to the server",undefined);
        }else if(!(response?.body?.current?.temperature)){
            callback("parameters are not valid",undefined);
        }else{
            callback(undefined,"It is currently " + response.body.current.temperature + "degrees out. It feels like" + response.body.current.feelslike + "degrees out.");
        }
    });
}

module.exports = forecast;

