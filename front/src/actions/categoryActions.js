import axios from 'axios';
import * as types from './actionTypes';


function url() {
    return 'http://localhost:8080/categories';
}

export function fetchCategories() {
    console.log("fetching category")

    return function action(dispatch) {
        dispatch({ type: types.FETCHING_CATEGORY })
        axios.get(url())
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
               // const categories = categoriesResponse.categories.map(
                //     serverCategory => {
                //     id: serverCategory.id,
                //     name: serverCategory.name});

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