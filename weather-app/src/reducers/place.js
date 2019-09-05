import {SET_PLACE} from './../actions';

export const place = (state = {}, action) => {
    switch (action.type) {
        case SET_PLACE:
            return action.payload;
        default:
            return state;
    }
}