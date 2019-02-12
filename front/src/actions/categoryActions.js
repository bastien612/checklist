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

export function postCategory(name) {
    console.log("pouet:" + name);
    const category = { name: name };

    return function (dispatch) {
        dispatch({ type: types.POSTING_CATEGORY });
        return axios.post(url(), category)
            .then(response => {
                dispatch({ type: types.POSTING_CATEGORY, status: response.status })
                if (response.status === 200) {
                    console.log("Response 200 ok");
                } else if (response.status === 201) {
                    console.log("Response 201 ok");
                }
                else {
                    throw new Error(`Error status : ${response.status} | HTML text : ${response.statusText}`);
                }
            })
            .catch(error => alert(error));
    }
}