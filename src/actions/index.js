import Axios from 'axios';
const API_KEY = "89bf48ef56c1ec36112bb701ece5a2ee";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = Axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
