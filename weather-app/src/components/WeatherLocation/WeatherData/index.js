import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => (
    // const {temperature, weatherState, humidity, wind} = data; ^ forma de hacerlo con decostructing

    <div className='weatherDataCont'>
        <WeatherTemperature 
            temperature={temperature} 
            weatherState={weatherState}>
        </WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    }),
};

export default WeatherData;