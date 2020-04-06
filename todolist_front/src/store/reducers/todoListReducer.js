import { ADD_TASK_SUCCESS, GET_TASK_SUCCESS, REMOVE_TASK_SUCCESS } from '../actions/todoListActions';

const initialState = {
    tasks: [],
    complete: false
};

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                tasks: action.data.tasks,
                complete: false
            }
        case GET_TASK_SUCCESS:
            return {
                ...state,
                tasks: action.data,
                complete: false
            }        
        case REMOVE_TASK_SUCCESS: 
            return {
                ...state,
                tasks: action.data,
                complete: false
            }
            // case "TOGGLE_TODO":
            //     return state.map(
            //       todo =>
            //         todo.id === action.payload.id
            //           ? { ...todo, complete: !todo.complete }
            //           : todo
            //     );
            // case "REMOVE_TODO":
            //     return state.filter(todo => todo.id !== action.payload.id);
          
            default:
                return state;
    };
};

export default todoListReducer;