import React from 'react';
import ForeCastItem from './ForeCastItem';
import PropTypes from 'prop-types';
import './styles.css';

const renderForeCastItemDays =(forecastData) => {
    return forecastData.map(forecast => (<ForeCastItem
        key={`${forecast.weekDay}${forecast.time}`}
        weekDay={forecast.weekDay}
        time={forecast.time}
        data={forecast.data}>

        </ForeCastItem>));
}

const renderProgress = () => {
    return <h3>Cargando</h3>;
}   

const ForecastExtended = ({place, forecastData}) => (
    <div>
        <h2 className='foreCastTitle'>{`Pronostico extendido ${place}`}</h2>
        {forecastData ? renderForeCastItemDays(forecastData) : renderProgress()}
    </div>
);

ForecastExtended.propTypes= {
    place:  PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;