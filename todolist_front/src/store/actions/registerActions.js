import Api from '../../api';

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

const registerSuccess = ({ data }) => {
    return {
        type: REGISTER_SUCCESS,
        data
    }
}; 

export const registerRequest = body => {
    return dispatch => {
        Api.post("/auth/register", body)
        .then (res => {
            dispatch(registerSuccess(res));
            alert("Cadastro realizado com sucesso");
            window.location.replace("/login");
        })
        .catch()
    }    
};