import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import { useState } from 'react';
import AddTodos from './components/AddTodos';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  const onDelete = (todo) => {
    console.log('I am on delete', todo);
    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
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
    }
  ]);

  const addTodo = (title,desc) => {
    let sno;
    if(todos.length === 0){
      sno = 1;
    }else {
      sno = todos[todos.length-1].sn + 1;
    }
    const myTodos = {
      sn : sno,
      title : title,
      desc : desc
    }
    setTodos([...todos, myTodos]);
    console.log(myTodos);
  }

  return (
    <div className="App">
    <Router>
      <Header title="My Todos" searchBar={false}/>
      <Routes>
        <Route exact path="/" element={
          <>
          <AddTodos addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
        }>
        
        </Route>
        <Route exact path="/about" element={
              <About/>}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
    </div>   
  );
}

export default App;
