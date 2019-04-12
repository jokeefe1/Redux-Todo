import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => {
                return <Todo todo={todo} key={todo.id} />;
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return { todos: state.todos };
};

export default connect(mapStateToProps)(TodoList);
