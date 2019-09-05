import React, { Component } from 'react';
import ForecastExtended from './../components/ForecastExtended';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getForecastDataFromPlaces, getPlace} from './../reducers';

class ForecastExtendedContainer extends Component {
    render() {
        const {place, forecastData} = this.props;
        return (
            place &&
            <ForecastExtended place={place} forecastData={forecastData}></ForecastExtended>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    place: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

const mapStateToProps = state => ({
    place: getPlace(state),
    forecastData: getForecastDataFromPlaces(state),
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);