import React, { Component } from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      todos: [],
      priority: '',
      text: ''  

    };
    this.createTodo = '';
    this.count = 0;
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
  }

  handleText(e) {
    this.setState({ text: e.target.value });
  }

  handlePriority(e) {
    this.setState({ priority: e.target.value });
  }

  addTodo() {
    // debugger;
    var newTodos = {
      id: this.count++,
      text: this.state.text,
      priority: this.state.priority,
    };
    var todoValue = this.state.todos;
    todoValue.push(newTodos);
    this.setState({
      todos: todoValue,
      text: '',
      priority: ''
    });
    newTodos.value = '';
  }

  editTodo(todos, id) {
    debugger;
    let changeTodos = [...this.state.todos];
    var index = changeTodos.findIndex(todos => todos.id === id);
    let frontTodos = Object.assign({}, changeTodos[index], todos); // <- was id
    let backTodos = changeTodos.slice(0, index);
    let updatedTodo = changeTodos.slice(index, +1);

    this.setState({
      todos: [...frontTodos, updatedTodo, ...backTodos]
    });
  }

  removeTodo(index, id) {
    // debugger;
    let eraseTodos = [...this.state.todos];
    var index = eraseTodos.findIndex(todos => todos.id === id);
    eraseTodos.splice(index, 1);
      // id !== index
    // );
    console.log(index, id);
    this.setState({ todos: eraseTodos });

  }

  render() {
    return (
      <div className='container'>
        <h1>Very Simple To-Do App</h1>
        <h4>Track all of the things</h4>
        <div className="column">
          <div className="col-sm-6">
            <div className="card text-white mb-3">
              <div className='card-header'>Insert To-Do's Here</div>
              <div className="card-body text-black">

                <textarea
                  className='create-todo-text'
                  placeholder='I want to...'
                  type='text'
                  defaultValue={this.state.todos.text}
                  onChange={this.handleText}
                  ref={(input) => this.createTodo = input}
                />
              </div>
              <div className='card-footer'>
                <select onChange={this.handlePriority} className='create-todo-priority'>
                  <option value='null'> Select a priority </option>
                  <option value='1'> Low Priority </option>
                  <option value='2'> Medium Priority </option>
                  <option value='3'> High Priority </option>
                </select>

                <button className='create-todo' onClick={this.addTodo}>Add</button>
              </div>
            </div>
          </div>
          <br />

          <div className="col-md-4">
            <div className="card text-white mb-3">
              <strong>How many things left to do: {this.state.todos.length}</strong>
              <br /> <br />
              <div className='card-header'>To-Do's:</div>
              <div className="card-block no-padding pull-right">
                <span>
                  <TodoList 
                    todos={this.state.todos}
                    editTodo={this.editTodo}
                    removeTodo={this.removeTodo}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;