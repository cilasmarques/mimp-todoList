import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import todoListReducer from './todoListReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    todoList: todoListReducer,
});

export default rootReducer;