import {
    CURRENT_CITY
} from './types';

const initialState = {
    cities: [
        {id: 1, city: 'Seattle', state: 'WA'},
        {id: 2, city: 'San Jose', state: 'CA'},
        {id: 3, city: 'Burbank', state: 'CA'},
        {id: 4, city: 'Dallas', state: 'TX'},
        {id: 5, city: 'Washington', state: 'DC'},
        {id: 6, city: 'Chicago', state: 'IL'},
        {id: 7, city: 'Tulsa', state: 'OK'}
    ],
    currentCity: {}
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case CURRENT_CITY:
            return {...state, currentCity: action.payload}
        default:
            return state;
    }
}

export default reducer