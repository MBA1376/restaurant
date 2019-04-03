import {GET_FOODS} from '../actions/types';

const initialState = {
    foods : [] ,
    cart : []
};

export default function(state = initialState , action) {
    switch(action.type) {
        case GET_FOODS : 
            return {
                ...state ,
                foods : [...action.payload]
            }

        default:
            return state;
    }
}