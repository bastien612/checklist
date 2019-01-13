import * as types from './actionTypes';

function url() {
    return 'http://localhost:8080';
}

export function receiveCategory(json){
    return {type: types.RECEIVE_CATEGORY, category:json.category};
}

export function fetchCategory() {
    return dispatch => {
        return fetch(url()+ 'categories', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                Accept: 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => dispatch(receiveCategory(json)));
    }
}