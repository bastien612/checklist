import * as types from './actionTypes';

function url() {
    return 'http://localhost:8080';
}

export function fetchCategories() {
    console.log("fetching category")
    let categories = []
    return dispatch => (
        {
            type: types.RECEIVE_CATEGORY, categories: categories
        }
    )
    // return dispatch => {
    //     return fetch(url() + '/categories', {
    //         method: 'GET',
    //         mode: 'cors',
    //         credentials: 'include',
    //         headers: {
    //             Accept: 'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(json =>
    //         dispatch(
    //             {
    //                 type: types.RECEIVE_CATEGORY, categories: json.categories
    //             }
    //         )
    //     );
    // }
}