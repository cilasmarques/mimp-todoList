import { REGISTER_SUCCESS, REGISTER_FAILED } from '../actions/registerActions';

const initialState = {
    registered: false,
    user: {}
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                registered: true,
                user: action.data.user
            };
            
        case REGISTER_FAILED:
            return {
                ...state,
                registered: false,
                user: {}
            };
        
        default:
            return state;
    };
};

export default registerReducer;