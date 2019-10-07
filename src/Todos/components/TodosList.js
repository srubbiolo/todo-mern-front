import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import TodoCard from './TodoCard';

const TodosList = ({ isLoading, todos, updateState}) => {
    const [update, setUpdate] = useState(false);
    
    const toggleTaskState = (_id) => {
        todos.forEach( (todo)=> {
            if (todo._id === _id) {
                todo.state = !todo.state;
                updateState(_id);
            }
        })
        setUpdate(!update);
    }
    
    useEffect(() => {
    }, [isLoading, todos, update])

    return isLoading ? <Loading/> : (todos.length > 0) ?
        todos.map((todoItem, index) => {
                return <TodoCard 
                            toggleTaskState={toggleTaskState}
                            key={index}
                            todoInfo={todoItem}>
                        </TodoCard>
            }) : 'No to do tasks.'
}

export default TodosList