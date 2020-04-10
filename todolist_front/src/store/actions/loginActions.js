import Api from '../../api';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

const loginSuccess = ({ data }) => {
    return {
        type: LOGIN_SUCCESS,
        data
    }
}; 

const loginFailed = ({ data }) => {
    return {
        type: LOGIN_FAILED,
        data
    }
}; 

const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS,
    }
}; 

export const loginRequest = body => {
    return dispatch => {
        Api.post("/auth/login", body)
        .then (res => {
            localStorage.setItem('userToken', res.data.token);
            dispatch(loginSuccess(res));
        })
        .catch(err => {
            dispatch(loginFailed(err));
        })
    }
};

export const logoutRequest = () => {
    return dispatch => {
        dispatch(logoutSuccess());
    }
};