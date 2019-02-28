import axios from 'axios';
import * as types from './actionTypes';
import configs from 'services/configs';
import * as productService from 'services/productService';

export function fetchProducts() {
    return dispatch => {
        return fetch(configs.BACK_URL + '/products', {
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

export function postProduct(name, categories) {
    const productToSend = {
        name: name,
        categories: categories
    }
    return dispatch => {
        return axios.post(configs.BACK_URL + '/products', productToSend)
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    const product = productService.parseServerProduct(response.data);
                    dispatch({ type: types.NEW_PRODUCT, product: product });
                } else {
                    throw new Error(`Error status : ${response.status} | HTML text : ${response.statusText}`);
                }
            })
    }
}