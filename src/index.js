import {weatherController} from './controller';

function weatherReport(city, temp, type) {
    return {
        city,
        type,
        temp
    };

}
weatherController.getWeather("london");
let b = document.getElementById('weather-button');
b.onclick = function() {
    weatherController.getWeather(document.getElementById('city').value);
}


export {weatherReport}
