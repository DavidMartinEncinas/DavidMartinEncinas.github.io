import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


const WeatherLocation = ({onWeatherLocationClick, place, data}) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location place={place}></Location>
        {data ? <WeatherData data={data}></WeatherData> : <LinearProgress />}
    </div>
);

WeatherLocation.propTypes ={
    place: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    }),
}

export default WeatherLocation;