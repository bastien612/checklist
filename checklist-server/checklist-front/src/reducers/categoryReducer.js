import initialState from "reducers/initialState";
import { createReducer } from 'redux-starter-kit';
import { FETCH_CATEGORY, RECEIVE_CATEGORY } from 'actions/actionTypes';
import { NEW_CATEGORY } from "../actions/actionTypes";

const categoryReducer = createReducer(initialState.categories, {
    [FETCH_CATEGORY]: (state, action) => {
        return state;
    },
    [RECEIVE_CATEGORY]: (state, action) => {
        state = action.categories;
        return state;
    },
    [NEW_CATEGORY]: (state, action) => {
        state.push(action.category)
        return state;
    }
});
export default categoryReducer;