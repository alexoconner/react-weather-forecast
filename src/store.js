
import fetch from 'whatwg-fetch';

class WeatherStore {
    constructor() {

        this.apiKey = '5f8fe662dc9939396c394c5fe2580ff6';

        this.apiUrls = {
            currentWeather: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a'
        }
    }

    getCurrentWeather() {
        fetch( this.apiUrls + this.apiKey )
            .then((response) => {
                console.log(response);
            })
            .then((data) => {
                console.log(data);
            });
    }
}

export default WeatherStore;
