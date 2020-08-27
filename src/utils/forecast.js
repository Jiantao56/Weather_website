const request = require('request')

require('request')
const log = console.log

const forecast = (lon, lat, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat +'&lon='+ lon +'&units=imperial&appid=4a95ccab489160511299dcafdef01047'

    request({ url, json: true}, (error, response, body) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        }
        else if (body.message){
            callback('Unable to find location!', undefined)
        }
        else {
            callback(undefined,{
                temp: body.current.temp
            })
        }
    })
}

module.exports = forecast

