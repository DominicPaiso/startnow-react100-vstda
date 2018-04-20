import React, { Component } from 'react';
import Todo from './Todo';
import App from './App';

export default class Mapping extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos,
            updateTodos: false
        };
    }

    render() {
        return (
            <div>
                {this.state.todos.map((todo, index) =>
                    <Todo id={index}
                        key={index}
                        todo={todo}
                        removeTodo={this.props.removeTodo}
                        editTodo={this.props.editTodo} />
                )}
            </div>
        );
    }
}