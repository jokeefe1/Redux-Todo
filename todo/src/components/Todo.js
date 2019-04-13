import React from 'react';

const Todo = props => {
    return <div  style={ props.todo.completed ? { textDecoration: 'line-through', color: 'red'} : null} onClick={props.handleComplete}>{props.todo.task}</div>;
};

export default Todo;
