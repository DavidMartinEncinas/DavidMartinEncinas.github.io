import {createSelector} from 'reselect';
import toPairs from 'lodash.topairs';
import {SET_FORECAST_DATA, GET_WEATHER_PLACE, SET_WEATHER_PLACE} from './../actions';

export const places = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const {place, forecastData} = action.payload;
            return {...state, [place]: {...state[place], forecastData, forecastDataDate: new Date()}};
        }
        case GET_WEATHER_PLACE: {
            const place = action.payload;
            return {...state, [place]: {...state[place], weather: null}};
        }
        case SET_WEATHER_PLACE: {
            const {place} = action.payload;
            return {...state, [place]: {...state[place], weather : action.payload.data}};
        }
        default:
            return state;
    }
}

export const getForecastDataFromPlaces =
    createSelector((state, place) => state[place] && state[place].forecastData, forecastData => forecastData);

const fromObjectToArray = places => (toPairs(places).map(([key, value]) => ({key, name: key, data: value.weather})));

export const getWeatherPlaces = 
    createSelector(state => fromObjectToArray(state), places => places)