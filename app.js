const forecast = require('./forecast');

forecast(37.8267,-122.4233,(error,response)=>{
    console.log(error);
});
