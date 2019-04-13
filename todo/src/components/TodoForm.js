import React from 'react';
import { connect } from 'react-redux';
import { addText, clearText } from '../actions/';

class TodoForm extends React.Component {
    state = {
        inputValue: ''
    };

    handleInput = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleAdd = e => {
        e.preventDefault();
        this.props.addText(this.state.inputValue);
        this.setState({ inputValue: '' });
    };

    handleClear = () => {
        this.props.clearText();
    };

    render() {
        return (
            <div>
                <input
                    placeholder="...what would you like to do?"
                    value={this.state.inputValue}
                    onChange={this.handleInput}
                />
                <button onClick={this.handleAdd}>Add Todo</button>
                <button onClick={this.handleClear}>Clear Todo</button>
            </div>
        );
    }
}

export default connect(
    () => ({}),
    { addText, clearText }
)(TodoForm);
