import { ADD_TASK_SUCCESS, GET_TASK_SUCCESS, UPDATE_TASK_SUCCESS, REMOVE_TASK_SUCCESS, ADD_TASK_FAILED, GET_TASK_FAILED, UPDATE_TASK_FAILED, REMOVE_TASK_FAILED } from '../actions/todoListActions';

const initialState = {
    tasks: []
};

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                tasks: action.data
            };

        case GET_TASK_SUCCESS:
            return {
                ...state,
                tasks: action.data
            };

        case UPDATE_TASK_SUCCESS:
            return {
                ...state,
                tasks: action.data
            };    

        case REMOVE_TASK_SUCCESS: 
            return {
                ...state,
                tasks: action.data
            };

        case ADD_TASK_FAILED:
            return {
                ...state,
                tasks: []
            };

        case GET_TASK_FAILED:
            return {
                ...state,
                tasks: []
            };

        case UPDATE_TASK_FAILED:
            return {
                ...state,
                tasks: []
            };    

        case REMOVE_TASK_FAILED: 
            return {
                ...state,
                tasks: []
            };

        default:
            return state;
    };
};

export default todoListReducer;