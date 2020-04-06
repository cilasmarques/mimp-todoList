import Api from '../../api';

export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const TOGGLE_TASK_SUCCESS = "TOGGLE_TASK_SUCCESS";
export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS";
export const REMOVE_TASK_SUCCESS = "REMOVE_TASK_SUCCESS";

const addTaskSuccess = ({ data }) => {
    return {
        type: ADD_TASK_SUCCESS,
        data
    };
};

const getTaskSuccess = ({ data }) => {
    return {
        type: GET_TASK_SUCCESS,
        data
    };
};

const removeTaskSuccess = ({ data }) => {
    return {
        type: REMOVE_TASK_SUCCESS,
        data
    };
};

export const addTaskRequest = body => {
    return dispatch => {
        Api.post("/auth/task/addTask", body)
        .then (res => {
            dispatch(addTaskSuccess(res));
        })
        .catch();
    };
};

export const getTaskRequest = id => {
    return dispatch => {
        Api.get(`auth/task/getTasks/${id}`)
        .then (res => {
            dispatch(getTaskSuccess(res));
        })
        .catch();
    };
};

export const removeTaskRequest = body => {
    return dispatch => {
        Api.delete("/auth/task/removeTask", {data: body})
        .then (res => {
            dispatch(removeTaskSuccess(res));
        })
        .catch();
    };
};