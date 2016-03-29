
import React from 'react';
import ReactDOM from 'react-dom';

import WeatherStore from './store';

class WeatherWidget extends React.Component {
    constructor( props ) {
        super( props );

        console.log(WeatherStore.getCurrentWeather());
    }

    render() {
        return (
            <h1>Weather Widget</h1>
        )
    }
}

export default WeatherWidget;
