import React, { Component } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Redux Todo App</h1>
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}

export default App;
