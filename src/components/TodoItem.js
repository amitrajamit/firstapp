import React from 'react';

const TodoItem = ({todo, onDelete}) => {
  return (
      <div className="container">
        <h4>{todo.title}</h4>
        <h6>{todo.desc}</h6>
        <button className="btn btn-danger btn-sm" onClick={ () => {onDelete(todo)}}>Delete</button>
      </div>
  )
};

export default TodoItem;
