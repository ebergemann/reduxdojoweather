import axios from 'axios';
import {
    CURRENT_CITY,
    NEW_CITY
} from './types'
import {CurrentCity} from '../CurrentCity';

const API_KEY = '&APPID=261b3729b9cc586bd39db380eb7857b4';


export const fetchCityDataAction = (city) => {
    return (dispatch, getState, url) => {
        const weatherUrl = `${url}${city}&units=metric${API_KEY}`
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

export const fetchCityToAdd = (city) => {
    return (dispatch, getState, url) => {
        const completeURL = `${url}${city}&units=metric${API_KEY}`
        axios.get(completeURL)
        .then(({data}) =>{
            console.log(data)
            const currentCity = new CurrentCity(data.name, data.main.humidity, data.main.temp, data.main.temp_max, data.main.temp_min, data.weather);
            dispatch(addCityToNavBar(currentCity));
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
const addCityToNavBar = (payload) => {
    return {
        type: NEW_CITY, payload
    }
}