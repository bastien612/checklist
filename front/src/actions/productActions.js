import * as types from './actionTypes';

function url() {
    return 'http://localhost:8080';
}

export function fetchProduct() {
    return dispatch => {
        return fetch(url() + '/products', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                Accept: 'application/json'
            }
        })
        .then(response => response.json())
        .then(json =>
            dispatch(
                {
                    type: types.FETCH_PRODUCT, products: json.products
                }
            )
        );
    }
}