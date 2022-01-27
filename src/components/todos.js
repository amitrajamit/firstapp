import React from 'react';
import TodoItem from '../components/TodoItem'

function Todos(props) {
  return (
    <div className="container">
        <h3>Todo List</h3>
        {props.todos.length ===0 ? "No todos to diaplay" : props.todos.map((todo) => {
            return (
                <>
                <TodoItem key={todo.sn} todo={todo} onDelete={props.onDelete}/>
                <hr/>
                </>
            )

            
        })}
        
        
    </div>
  )
}

export default Todos;
