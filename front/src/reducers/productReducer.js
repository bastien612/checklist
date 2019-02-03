import initialState from "reducers/initialState"
import { FETCH_PRODUCT } from "actions/actionTypes"

export default function productReducer(state = initialState.products, action) {
    switch (action.type) {
        case FETCH_PRODUCT:
            console.log("Fetch a product action");
            return state;
        default:
            return state;
    }
}