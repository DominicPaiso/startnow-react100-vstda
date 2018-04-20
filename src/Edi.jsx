import React, { Component } from 'react';
import Edit from './Edit';

export default class Todo extends Component {
    render() {
        let { id, todos, onRemove, onEdit } = this.props
        return (
            <li>{this.props.todos.toString()}
                <button 
                    onClick={() => onEdit(id)}
                    type='button'
                    className='btn btn-warning'>
                <span className="glyphicon glyphicon-edit"> </span>
                </button>
                <button 
                    onClick={() => onRemove(id)}
                    type='button'
                    className='btn btn-danger'>
                <span className="glyphicon glyphicon-trash"> </span>
                </button>
            </li>

        );
    }
}

 //   let todoValue = this.createTodo.value;

  //   let newTodos = this.state.todos;
  //   newTodos.push(todoValue);

  //   this.setState({ todos: newTodos });
  //   this.createTodo.value = '';
  //  console.log(this.createTodo.value);
  // } 

  //todoUpdates


    // todos: [
      //   {
      //     id: 0,
      //     text: '',
      //     priority: 1
      //   }
      // ]
      {/* <ul>
                  {this.state.todos.map((todos, index) =>
                    <Todo id={index}
                      key={index}
                      todos={todos}
                      onEdit={() => this.editTodo(index)}
                      onRemove={() => this.removeTodo(index)} />
                  )}
                </ul> */}

                        // let todoPriority = 'list-group-item list-group-item';
        // switch (this.props.priority) {
        //     case '1':
        //         todoPriority += 'success';
        //         break;

        //     case '2':
        //         todoPriority += 'warning';
        //         break;

        //     case '3':
        //         todoPriority += 'danger';
        //         break;
        // };
