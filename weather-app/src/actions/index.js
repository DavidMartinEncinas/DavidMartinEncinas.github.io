import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';

export const SET_PLACE = 'SET_PLACE';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_PLACE = 'GET_WEATHER_PLACE';
export const SET_WEATHER_PLACE = 'SET_WEATHER_PLACE';

const actionCreatorSetPlace = payload => ({type: SET_PLACE, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const getWeatherPlace = payload => ({type: GET_WEATHER_PLACE, payload});
const setWeatherPlace = payload => ({type: SET_WEATHER_PLACE, payload});

const api_key = "dc9be5113e721ca5e122183c548b6008";
const url = "http://api.openweathermap.org/data/2.5/forecast"
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

export const setSelectedPlace = payload => {
    return (dispatch, getState) => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}&units=metric`;

        // activar en el estado un indicador de busqueda de datos
        dispatch(actionCreatorSetPlace(payload));

        const state = getState();
        const date = state.places[payload] && state.places[payload].forecastDataDate;

        const now = new Date();

        if (date && (now - date) < 1 * 60 * 1000){
            return;
        }
        
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            WeatherData => {
                const forecastData = transformForecast(WeatherData);
                // modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({place: payload, forecastData}))
            }
        );
    };
};

export const setWeather = payload => {

    return dispatch => {
        payload.forEach(place => {

            dispatch(getWeatherPlace(place));

            const api_weather = `${url_weather}?q=${place}&appid=${api_key}&units=metric`;
            fetch(api_weather).then(data => {
                return data.json();
            }).then(Weather_data => {
                const data = transformWeather(Weather_data);

                dispatch(setWeatherPlace({place, data}));
            });
        });
    }
};