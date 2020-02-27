

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';


export function auth() {

}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}
