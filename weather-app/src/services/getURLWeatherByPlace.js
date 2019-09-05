import {url_base_weather, api_key} from "./../constants/api_url";

const getURLWeatherByPlace = place => {
    return `${url_base_weather}?q=${place}&appid=${api_key}&units=metric`;
}

export default getURLWeatherByPlace;