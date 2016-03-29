
class WeatherStore {
    constructor() {

        this.apiKey = '5f8fe662dc9939396c394c5fe2580ff6';

        this.apiUrls = {
            currentWeather: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk'
        }
    }

    getCurrentWeather() {
        fetch( this.apiUrls.currentWeather + '&appid=' + this.apiKey )
            .then((response) => {
                console.log(response);
            })
            .then((data) => {
                console.log(data);
            });
    }
}

export default new WeatherStore();
