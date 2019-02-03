import axios from 'axios';
import * as types from './actionTypes';


function url() {
    return 'http://localhost:8080/categories';
}

export function fetchCategories() {

    return function (dispatch) {
        dispatch({ type: types.FETCHING_CATEGORY });
        return axios.get(url())
            .then(response => {
                const categories = response.data._embedded.categories.map(category => {
                    return {
                        id: category._links.self.href,
                        name: category.name
                    }
                })
                dispatch({ type: types.RECEIVE_CATEGORY, categories: categories });
            })
    }
}