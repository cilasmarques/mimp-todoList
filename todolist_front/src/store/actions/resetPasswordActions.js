import Api from '../../api';

export const RESET_SUCCESS = "RESET_SUCCESS";
export const RESET_FAILED = "RESET_FAILED";

const resetPasswordSuccess = ({ data }) => {
    return {
        type: RESET_SUCCESS,
        data
    }
}; 

const resetPasswordFailed = ({ data }) => {
    return {
        type: RESET_FAILED,
        data
    }
}; 

export const resetPasswordRequest = body => {
    return dispatch => {
        Api.post("/auth/reset_password", body)
        .then (res => {
            dispatch(resetPasswordSuccess(res));
        })
        .catch( err => {
            dispatch(resetPasswordFailed(err));
        })
    }    
};