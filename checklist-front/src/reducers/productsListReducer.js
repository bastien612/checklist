import initialState from "reducers/initialState"
import { FETCH_PRODUCT } from "actions/actionTypes"

export default function productReducer(state = initialState.productsLists, action) {
    switch (action.type) {
        case FETCH_PRODUCT_LIST:
            console.log("Fetch a product list action");
            return state;
        default:
            return state;
    }
}