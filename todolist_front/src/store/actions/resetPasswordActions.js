import Api from '../../api';

export const RESET_SUCCESS = "RESET_SUCCESS";

const resetPasswordSuccess = ({ data }) => {
    return {
        type: RESET_SUCCESS,
        data
    }
}; 
export const resetPasswordRequest = body => {
    return dispatch => {
        Api.post("/auth/reset_password", body)
        .then (res => {
            dispatch(resetPasswordSuccess(res));
        })
        .catch()
    }    
};