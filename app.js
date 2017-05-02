
const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');
const fs = require('fs');

// const tasSite = 'http://thetvdb.com/?tab=seasonall&id=76168';
const endpoint = 'https://api.weather.gov/';
const otherPoint = 'http://forecast.weather.gov/MapClick.php?lat=30.133486&lon=-97.361327&FcstType=json';
// const otherPoint = 'http://forecast.weather.gov/MapClick.php?lat=30.133486&lon=-97.361327';

const colorado = [30.133486, -97.361327];

let pointMetaData = `${endpoint}points/${colorado[0]},${colorado[1]}`;

let coloradoForecast = 'https://api.weather.gov/points/30.1335,-97.3613/forecast';



function makeCall(url, callback) {
    const options = {
        url: url,

        headers: {
            'Accept' : 'application/vnd.noaa.dwml+xml;version=1',
            'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64)',
            'Content-Type' : 'application/json'
        }
    }
    request.get(options, callback);
}

function firstCalls(error, response, body) {
    // if (!error && response.statusCode == 200)


    if(typeof body === 'string') {
        console.log(chalk.red('its a string'));
    }

    let jsonBody = JSON.parse(body);
    // let operationalMode = jsonBody.operationalMode;
    // let data = jsonBody.data;

    // let currentObservation = jsonBody.data.currentobservation;




    // keys.forEach(key => console.log('key', key))
    // console.log(chalk.green('body'), chalk.blue(JSON.stringify(data)));
    console.log(chalk.green('body'), chalk.blue(body));

}



makeCall(pointMetaData, firstCalls);
