import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const locationList = ({places, onSelectedLocation}) => {
    const handleWeatherLocationCLick = place => {
        onSelectedLocation(place);
    };
    
    const strToComponents = places => (
        places.map(place => <WeatherLocation 
                            key={place.key} 
                            place={place.name}
                            onWeatherLocationClick={() => handleWeatherLocationCLick(place.name)}
                            data={place.data}>
                            </WeatherLocation>)
    );

    return (<div className="locationList">
        {strToComponents(places)}
    </div>)
};

locationList.propTypes = {
    places: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default locationList;