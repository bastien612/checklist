import initialState from "reducers/initialState"
import {FETCH_PRODUCT} from "actions/actionTypes"

export default function productReducer(state = initialState.products, action) {
    console.log("productReducer " + JSON.stringify(state))
    let newState;
    switch (action.type) {
        case FETCH_PRODUCT:
            console.log("Fetch a product action");
            newState = action.products;
            return state;
        default:
            return state;
    }
}