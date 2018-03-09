const request = require('request');

const getWeather = (lat, lng) => {
    return new Promise((resolve, reject) => {

        request({
            url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Forecast.io server.');
            } else if (response.statusCode === 400) {
                reject('Unable to fetch weather.');
            } else if (response.statusCode === 200) {
                resolve({
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                });
            }
        });
    });
};

module.exports.getWeather = getWeather;