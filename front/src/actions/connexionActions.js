import * as types from 'actions/actionTypes';

export function login(username, password) {
    console.log("username : " + username);
    console.log("password : " + password);
    return (dispatch) => dispatch({ type: types.LOGIN_SUCCESSFUL, user: username });
}