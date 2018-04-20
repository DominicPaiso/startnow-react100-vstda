import React, { Component } from 'react';
import App from './App';
import TodoList from './TodoList';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: props.todo,
            updateTodo: false,
            priority: props.priority,
        };

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleUpdateText = this.handleUpdateText.bind(this);
        this.updateText = this.updateText.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.handlePriority = this.handlePriority.bind(this);
    }

    handleEditClick(e) {
        this.setState({ updateTodo: true });
    }

    handlePriority(e) {
        this.setState({ priority: e.target.value });
    }

    handleUpdateText(e) {
        let changeText = Object.assign({}, this.state.todo, { text: e.target.value });
        this.setState({ todo: changeText });
    }

    updateText(e) {
        this.setState({ updateTodo: false });
    }

    deleteTodo(e, index) {
        this.props.removeTodo(index, this.state.todo.id);
    }

    renderUpdate() {
        console.log("WIll show update todo UI");

        return (
            <div>
                <strong> Description </strong>
                <textarea
                    className='update-todo-text'
                    defaultValue={this.state.todo.text}
                    onChange={this.handleUpdateText} />
                <div>
                    <strong>Priority</strong>
                </div>
                <select
                    name='priority'
                    id='priority'
                    className='update-todo-priority btn-block'
                    placeholder='Select a priority'
                    defaultValue={this.state.todo.priority}
                    onChange={this.handlePriority}
                >
                    <option value='null'> Select a priority </option>
                    <option value='1'> Low Priority </option>
                    <option value='2'> Medium Priority </option>
                    <option value='3'> High Priority </option>
                </select>
                <button onClick={this.updateText}>Save</button>
            </div>
        );
    }

    renderNormal() {
        console.log("Will render todo (normal view)");
        return (
            <li>
                {this.state.todo.text}
                <button
                    onClick={() => this.handleEditClick()}
                    className='btn btn-warning'>
                    <span className="glyphicon glyphicon-edit"> </span>
                </button>
                <button
                    onClick={() => this.deleteTodo()}
                    className='btn btn-danger'>
                    <span className="glyphicon glyphicon-trash"> </span>
                </button>
            </li>
        );
    }

    render() {

        if (this.state.updateTodo) {
            return this.renderUpdate();

        } else {
            return this.renderNormal();

        }
    }
}