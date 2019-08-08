import React from 'react';
const NO_TODO_MESSAGE = "No todo's available";
const TodosList = ({todos, deleteTodo}) => {
    // Return list of todo components
    const todoList = todos.length ? (
        todos.map( todo => {
            return (
                <div className="panel-block todo-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <a onClick={() => {deleteTodo(todo.id)}} className="tag is-delete is-pulled-right"></a>
                </div>
            )
        })) : (<p className="has-text-centered">{NO_TODO_MESSAGE}</p>);
    return (
        <div className="td-list panel">
            {todoList}
        </div>
    )
}

export default TodosList;