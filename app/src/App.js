import React from "react";
import { Routes, Route } from "react-router-dom";

import PizzaApp from "./components/pizza/PizzaApp";
import TodoApp from "./components/todoapp/TodoApp";
import s from'./App.module.scss'
import Layout1 from "./components/layout/layout1/";
import Navbar from './components/layout/main/Main__navbar'

function App() {
  return (
    <div className={s.main}>
      <Navbar/>
      <Routes>
        <Route path="/pizza/*" element={<PizzaApp />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path='/layout1' element={<Layout1/>}/>
      </Routes>
    </div>
  );
}

export default App;
