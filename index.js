// ('request') - global module
// ('./request') - local module
const request = require('request'); //npm i request

// const APPID = 'your key here'; //https://home.openweathermap.org/api_keys
// APPID="your key to here" node app.js goes to the terminal
require('dotenv').config()


const getWeather = () => {

    request({ //https://www.npmjs.com/package/request
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.APPID}`,
        // uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APPID}`,
        json: true
        //son format if true, raw data is false
    }, (err, res) => {
        if (err) throw err;
        // comment what the error message is
        /*
        Common fixes: I need to install this, that and other
        #
        */
       // log the data that we get back to the console
        console.log(res.body);
    }

    )
};

getWeather()