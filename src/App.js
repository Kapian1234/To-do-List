import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>To-do List</h1>
      <TodoList />
      <a className='git-hub-link' href='https://github.com/Kapian1234/To-do-List'>GitHub源码</a>
    </div>
  );
}

export default App;
