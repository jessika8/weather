
const request = require('request');
const {promisify} = require('util');

const promisifiedRequest = promisify(request);

require('dotenv').config()


const getWeather = async () => {
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.APPID}`,
        json: true
    });

    console.log(data.body)
}

getWeather();
