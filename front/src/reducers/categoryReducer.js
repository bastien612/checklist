import initialState from "reducers/initialState";
import { createReducer } from 'redux-starter-kit';
import { FETCH_CATEGORY, RECEIVE_CATEGORY } from 'actions/actionTypes';

const categoryReducer = createReducer(initialState.categories, {
    [FETCH_CATEGORY]: (state, action) => {
        return state;
    },
    [RECEIVE_CATEGORY]: (state, action) => {
        return state = action.categories;
    }
});
export default categoryReducer;

// export default function categoryReducer(state = initialState.categories, action) {
//     let newState;
//     switch (action.type) {
//         case FETCH_CATEGORY:
//             return state;
//         case RECEIVE_CATEGORY:
//             // console.log("Receive a categories " + JSON.stringify(action.categories));
//             console.log(action.categories)
//             let newState = { ...state };
//             return { ...state, truc };
//         default:
//             return state;
//     }
// }