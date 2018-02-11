import axios from 'axios';
import {
    CURRENT_CITY
} from './types'
import {CurrentCity} from '../CurrentCity';

export const fetchCityDataAction = (city) => {
    return (dispatch, getState, url) => {
        const weatherUrl = `${url}${city}&units=metric&APPID=261b3729b9cc586bd39db380eb7857b4`
        console.log(weatherUrl);
        axios.get(weatherUrl)
        .then(({data}) => {
            console.log(data)
            const currentCity = new CurrentCity(data.name, data.main.humidity, data.main.temp, data.main.temp_max, data.main.temp_min, data.weather);
            dispatch(fetchCityDataSuccess(currentCity));
        })
    }
}

const fetchCityDataSuccess = (payload) => {
    return {
        type: CURRENT_CITY, payload
    }
}