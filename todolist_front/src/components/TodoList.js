import React from 'react';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { logoutRequest } from '../store/actions/loginActions';
import { addTaskRequest, getTaskRequest, removeTaskRequest } from '../store/actions/todoListActions';

import "../styles.css";

const TodoList = () => {
    const [task, setTask] = useState();
    const { logged, user, user: {email} } = useSelector(({login}) => login);
    const { tasks } = useSelector(({todoList}) => todoList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTaskRequest(user._id));
    }, [dispatch, user._id]);

    if (!logged) return <Redirect to='/login'/>

    const handleLogout = () => {
        dispatch(logoutRequest());
    };

    const handleAddTask = () => {
        dispatch(addTaskRequest({ email, task }));
    };

    const handleRemoveTask = ( taskIndex ) => {
        dispatch(removeTaskRequest({ email, taskIndex }));
    };

    return(
        <div>
            <section>
                <h1>TO DO LIST</h1>
                <form>
                    <input placeholder="New task" type="text" onChange={event => setTask(event.target.value)}/>
                    <button onClick={handleAddTask}>Add new task</button>
                </form>

                <ul>
                    {tasks.map(( taskName , taskIndex ) => (
                        <li key={ taskIndex }> 
                            { taskName }
                            <button onClick={() => handleRemoveTask( taskIndex )}>Remove</button>
                        </li>
                    ))}
                </ul>
                 
                <button onClick={handleLogout}>LOGOUT</button>
            </section>
        </div>
    )
};

export default withRouter(TodoList);