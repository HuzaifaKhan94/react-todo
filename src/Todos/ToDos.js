import React, { Component } from 'react';
import UUID from 'uuid/v4';
import TodosList from './ToDosList';
import AddTodo from './AddTodo';
import './Todos.css';

const CONTAINER_TITLE = "React Todo's"
const TODO_KEY = 'todos';

class ToDos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: JSON.parse(localStorage.getItem(TODO_KEY)) || []
        }
    }

    addTodo = todo => {
        // Generate UUID for todo task
        todo.id = UUID();
        // Construct new array with new todo
        const todos = [...this.state.todos, todo];

        this.updateTodos(todos);
    }

    deleteTodo = id => {
        // Construct new array without matching todo id
        const todos = this.state.todos.filter( todo => todo.id !== id );

        this.updateTodos(todos);
    }

    updateTodos = todos => {
        // Update application state
        this.setState( {
            todos
        });
        // Update local storage
        localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    }


    render() {
        return (
            <div className="todos-container container panel is-centered">
                <h1 className="title has-text-centered panel-heading">{CONTAINER_TITLE}</h1>
                <AddTodo addTodo={this.addTodo} />
                <TodosList todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

export default ToDos