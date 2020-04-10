import Api from '../../api';

export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";
export const REMOVE_TASK_SUCCESS = "REMOVE_TASK_SUCCESS";

export const ADD_TASK_FAILED = "ADD_TASK_FAILED";
export const GET_TASK_FAILED = "GET_TASK_FAILED";
export const UPDATE_TASK_FAILED = "UPDATE_TASK_FAILED";
export const REMOVE_TASK_FAILED = "REMOVE_TASK_FAILED";

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

const updateTaskSuccess = ({ data }) => {
    return {
        type: UPDATE_TASK_SUCCESS,
        data
    };
};

const removeTaskSuccess = ({ data }) => {
    return {
        type: REMOVE_TASK_SUCCESS,
        data
    };
};

const addTaskFailed = ({ data }) => {
    return {
        type: ADD_TASK_FAILED,
        data
    };
};

const getTaskFailed = ({ data }) => {
    return {
        type: GET_TASK_FAILED,
        data
    };
};

const updateTaskFailed = ({ data }) => {
    return {
        type: UPDATE_TASK_FAILED,
        data
    };
};

const removeTaskFailed = ({ data }) => {
    return {
        type: REMOVE_TASK_FAILED,
        data
    };
};


export const addTaskRequest = body => {
    return dispatch => {
        Api.post("/auth/task/addTask", body)
        .then (res => {
            dispatch(addTaskSuccess(res));
        })
        .catch(err => {
            dispatch(addTaskFailed(err));
        });
    };
};

export const getTaskRequest = id => {
    return dispatch => {
        Api.get(`/auth/task/getTasks/${id}`)
        .then (res => {
            console.log("get:" + res);
            dispatch(getTaskSuccess(res));
        })
        .catch(err => {
            dispatch(getTaskFailed(err));
        });
    };
};

export const updateTaskRequest = body => {
    return dispatch => {
        Api.put(`/auth/task/updateTask`, body)
        .then (res => {
            dispatch(updateTaskSuccess(res));
        })
        .catch(err => {
            dispatch(updateTaskFailed(err));
        });
    };
};

export const removeTaskRequest = body => {
    return dispatch => {
        Api.delete("/auth/task/removeTask", {data: body})
        .then (res => {
            console.log("remove:" + res.data);
            dispatch(removeTaskSuccess(res));
        })
        .catch(err => {
            dispatch(removeTaskFailed(err));            
        });
    };
};