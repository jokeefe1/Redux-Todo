import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { complete } from '../actions'

const TodoList = props => {
    const handleComplete = (id) => {
        props.complete(id)
        console.log(id)
    }
    return (
        <div>
            {props.todos.map(todo => {
                return (
                    <Todo 
                        todo={todo} 
                        key={todo.id} 
                        handleComplete={() => handleComplete(todo.id)}
                    />
                )
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return { todos: state.todos };
};

export default connect(mapStateToProps, { complete })(TodoList);
