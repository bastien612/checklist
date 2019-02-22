import axios from 'axios';
import * as types from 'actions/actionTypes';
import * as categoryService from 'services/categoryService';

function url() {
    return 'http://localhost:8080/categories';
}

export function fetchCategories() {

    return function (dispatch) {
        dispatch({ type: types.FETCHING_CATEGORY });
        return axios.get(url())
            .then(response => {
                const categories = response.data._embedded.categories.map(category => {
                    return categoryService.parseServerCategory(category)
                })
                dispatch({ type: types.RECEIVE_CATEGORY, categories: categories });
            })
    }
}

export function postCategory(name) {
    const categoryToSend = { name: name };

    return function (dispatch) {
        dispatch({ type: types.POSTING_CATEGORY });
        return axios.post(url(), categoryToSend)
            .then(response => {
                dispatch({ type: types.POSTING_CATEGORY, status: response.status })
                if (response.status === 200 || response.status === 201) {
                    const category = categoryService.parseServerCategory(response.data);
                    dispatch({ type: types.NEW_CATEGORY, category: category });
                    dispatch({ type: types.POST_CATEGORY_SUCCESS });
                } else {
                    throw new Error(`Error status : ${response.status} | HTML text : ${response.statusText}`);
                }
            })
            .catch(error => alert(error));
    }
}

