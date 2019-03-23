import { combineReducers } from 'redux';
import categoryReducer from "reducers/categoryReducer";
import productReducer from "reducers/productReducer";
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    form: formReducer
});

export default rootReducer;
