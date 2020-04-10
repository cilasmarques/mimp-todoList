import React from 'react';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { logoutRequest } from '../store/actions/loginActions';
import { addTaskRequest, getTaskRequest, removeTaskRequest, updateTaskRequest } from '../store/actions/todoListActions';

import "../styles.css";

const TodoList = () => {
    const [task, setTask] = useState();
    const { logged, user, user: {email} } = useSelector(({login}) => login);
    const { tasks } = useSelector(({todoList}) => todoList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTaskRequest(user.email));
    }, [dispatch, user.email]);

    if (!logged) return <Redirect to='/login'/>

    const handleLogout = () => {
        dispatch(logoutRequest());
    };

    const handleAddTask = () => {
        if (task !== "")
            dispatch(addTaskRequest({ email, text: task }));
    };

    const handleToggleTask = ( taskIndex ) => {
        dispatch(updateTaskRequest({ email, taskIndex }));
    };

    const handleRemoveTask = ( taskIndex ) => {
        dispatch(removeTaskRequest({ email, taskIndex }));
    };

console.log(tasks)

    return(
        <div>
            <section>
                <h1>TO DO LIST</h1>
                <form>
                    <input placeholder="New task" type="text" onChange={event => setTask(event.target.value)}/>
                    <button onClick={handleAddTask}>Add new task</button>
                </form>

                <ul>
                    {tasks.map(( currentTask ) => (
                        <li key={ currentTask.id }> 
                            <span className="text-concat">{currentTask.complete ? <s>{currentTask.text}</s> : currentTask.text}</span>
                            <button onClick={() => handleRemoveTask( currentTask.id )}>Remove</button>
                            <button onClick={() => handleToggleTask( currentTask.id )}>Toggle</button>
                        </li>
                    ))}
                </ul>

                <button onClick={handleLogout}>LOGOUT</button>
            </section>
        </div>
    )
};

export default withRouter(TodoList);    