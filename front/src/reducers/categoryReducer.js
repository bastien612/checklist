import initialState from "reducers/initialState";
import { FETCH_CATEGORY, RECEIVE_CATEGORY } from 'actions/actionTypes';

export default function categoryReducer(state = initialState.categories, action) {
    console.log("categoryReducer " + JSON.stringify(state))
    let newState;
    switch (action.type) {
        case FETCH_CATEGORY:
            console.log("Fetch a categories action");
            return state;
        case RECEIVE_CATEGORY:
            console.log("Receive a categories" + JSON.stringify(action.categories));
            return { ...state, categories: action.categories };
        default:
            return state;
    }
}