import React from 'react';
const NO_TODO_MESSAGE = "No tasks available";
const TodosList = ({todos, deleteTodo}) => {
    // Return list of todo components
    const todoList = todos.length ? (
        todos.map( todo => {
            return (
                <div className="card todo-item" key={todo.id}>
                    <div className="card-content">
                        <span>{todo.content}</span>
                        <a onClick={() => {deleteTodo(todo.id)}} className="tag is-delete is-pulled-right"></a>
                    </div>

                </div>
            )
        })) : (<p className="no-todos-display has-text-centered">{NO_TODO_MESSAGE}</p>);
    return (
        <div className="td-list panel">
            {todoList}
        </div>
    )
}

export default TodosList;