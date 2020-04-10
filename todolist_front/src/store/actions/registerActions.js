import Api from '../../api';

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

const registerSuccess = ({ data }) => {
    return {
        type: REGISTER_SUCCESS,
        data
    }
}; 

const registerFailed = ({ data }) => {
    return {
        type: REGISTER_FAILED,
        data
    }
}; 

export const registerRequest = body => {
    return dispatch => {
        Api.post("/auth/register", body)
        .then (res => {
            dispatch(registerSuccess(res));
        })
        .catch( err => {
            dispatch(registerFailed(err));
        })
    }    
};