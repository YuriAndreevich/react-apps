import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import PizzaApp from "./components/pizza/PizzaApp";
import TodoApp from "./components/todoapp/TodoApp";
import './App.scss'

function App() {
  return (
    <div className='main'>
      <div className='main__header'>
        <Link to="/home">Главная</Link>
        <Link to="/pizza">PizzaApp</Link>
        <Link to="/todo">todoApp</Link>
        <a href='http://history2022.sava.site/' rel="noreferrer">HistoryApp</a>
      </div>
      <Routes>
        <Route path="/pizza/*" element={<PizzaApp />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </div>
  );
}

export default App;
