import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions';
import {getWeatherPlaces, getPlace} from './../reducers'
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    componentDidMount() {
        const {setWeather, setSelectedPlace, place, places} = this.props;   
        setWeather(places);
        setSelectedPlace(place);
    }
    
    handleSelectedLocation = place => {
        this.props.setSelectedPlace(place);
    };

    render() {
        return (
            <LocationList places={this.props.placesWeather} onSelectedLocation={this.handleSelectedLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedPlace: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    places: PropTypes.array.isRequired,
    placesWeather: PropTypes.array,
    place: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

/*const mapDispatchToProps = dispatch => ({
    setSelectedPlace: value => dispatch(setSelectedPlace(value)),
    setWeather: places => dispatch(setWeather(places))
});*/

const mapStateToProps = state => ({
    placesWeather: getWeatherPlaces(state),
    place: getPlace(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);