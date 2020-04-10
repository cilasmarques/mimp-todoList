import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS } from '../actions/loginActions';

const initialState = {
    logged: false,
    user: {},
    token: ""
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                logged: true,
                user: action.data.user,
                token: action.data.token
            };

        case LOGIN_FAILED:
            return {
                ...state,
                logged: false,
                user: {},
                token: ""
            }; 

        case  LOGOUT_SUCCESS:
            return {
                ...state,
                logged: false,
                user: {},
                token: ""
            }; 

        default:
            return state;
    };
};

export default loginReducer;