import {
    CURRENT_CITY, NEW_CITY
} from './types';

const initialState = {
    cities: [
        {city: 'Seattle', state: 'WA'},
        {city: 'San Jose', state: 'CA'},
        {city: 'Burbank', state: 'CA'},
        {city: 'Dallas', state: 'TX'},
        {city: 'Washington', state: 'DC'},
        {city: 'Chicago', state: 'IL'},
        {city: 'Tulsa', state: 'OK'}
    ],
    currentCity: {}
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case CURRENT_CITY:
            return {...state, currentCity: action.payload}
        case NEW_CITY:
            return {...state, currentCity: action.payload, cities: state.cities.concat([{city: action.payload.name, state: ""}])}
        default:
            return state;
    }
}

export default reducer