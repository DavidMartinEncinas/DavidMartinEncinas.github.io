import {combineReducers} from 'redux';
import {createSelector} from 'reselect';
import {places, getForecastDataFromPlaces as _getForecastDataFromPlaces,
       getWeatherPlaces as _getWeatherPlaces} from './places';
import {place} from './place';

export default combineReducers({
    place,
    places
});

export const getPlace = createSelector(state => state.place, place => place);

export const getForecastDataFromPlaces = createSelector(state => state.places, getPlace, _getForecastDataFromPlaces);

export const getWeatherPlaces = createSelector(state => state.places, _getWeatherPlaces);