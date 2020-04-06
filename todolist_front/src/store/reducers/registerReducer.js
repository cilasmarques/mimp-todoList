import { REGISTER_SUCCESS } from '../actions/registerActions';

const initialState = {
    registered: false,
    user: {}
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                logged: true,
                user: action.data.user,
            };
        default:
            return state;
    };
};

export default registerReducer;
