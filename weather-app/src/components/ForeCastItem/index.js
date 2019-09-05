import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForeCastItem = ({weekDay, time, data}) => (
    <div>
        <div>{weekDay} - {time} hs</div>
        <WeatherData data={data}></WeatherData>
    </div>
);

ForeCastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    }),
};

export default ForeCastItem;