import React, { Component } from 'react';
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Todo App</h1>
        <form>
          <label name='todo'>
            <input />
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);
