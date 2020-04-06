import Api from '../../api';

export const FORGOT_SUCCESS = "FORGOT_SUCCESS";

const forgotPasswordSuccess = ({ data }) => {
    return {
        type: FORGOT_SUCCESS,
        data
    }
}; 
export const forgotPasswordRequest = body => {
    return dispatch => {
        Api.post("/auth/forgot_password", body)
        .then (res => {
            dispatch(forgotPasswordSuccess(res));
        })
        .catch()
    }    
};