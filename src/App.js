import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log('I am on delete', todo);
    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
  }
  const addTodos = () => {
    console.log('add todos called');
    // setTodos({sn: 4, title: "go to ground", desc: "lkjlkjlkjlklkjkl"})
  }
  const [todos, setTodos] = useState([
    {
      sn: 1,
      title: "Go to the market",
      desc: 'Go to the market and get the work done'
    },
    {
      sn: 2,
      title: "Go to the mall",
      desc: 'go to the mall and get the work done'
    },
    {
      sn: 3,
      title: "Go to the gym",
      desc: "go to the gym and get the work done"
    }
  ]);
  return (
    <div className="App">
      <Header title="My Todos" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete} addTodo={addTodos}/>
      <Footer/>
    </div>
  );
}

export default App;
