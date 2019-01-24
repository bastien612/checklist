import initialState from "reducers/initialState";
import {FETCH_CATEGORY, RECEIVE_CATEGORY} from 'actions/actionTypes';

export default function categoryReducer(state = initialState.categories, action) {
    console.log("categoryReducer " + JSON.stringify(state))
    let newState;
    switch (action.type) {
        case FETCH_CATEGORY:
            console.log("Fetch a categories action");
            newState = action.categories;
            return state;
        case RECEIVE_CATEGORY:
            newState = action.categories;
            console.log("Fetch a categories");
            return state;
        default:
            return state;
    }
}