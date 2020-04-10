import Api from '../../api';

export const FORGOT_SUCCESS = "FORGOT_SUCCESS";
export const FORGOT_FAILED = "FORGOT_FAILED";

const forgotPasswordSuccess = ({ data }) => {
    return {
        type: FORGOT_SUCCESS,
        data
    }
}; 

const forgotPasswordFailed = ({ data }) => {
    return {
        type: FORGOT_FAILED,
        data
    }
}; 

export const forgotPasswordRequest = body => {
    return dispatch => {
        Api.post("/auth/forgot_password", body)
        .then (res => {
            dispatch(forgotPasswordSuccess(res));
        })
        .catch(err => {
            dispatch(forgotPasswordFailed(err));
        })
    }    
};