import initialState from "reducers/initialState";
import {FETCH_CATEGORY, RECEIVE_CATEGORY} from 'actions/actionTypes';

export default function category(state = initialState.category, action) {
    let newState;
    switch (action.type) {
        case FETCH_CATEGORY:
            console.log("fetch category !!");
            return action;
        case RECEIVE_CATEGORY:
            newState = action.category;
            console.log("Receive category :" + JSON.stringify(action));
            return newState;
        default:
            return state;
    }
}