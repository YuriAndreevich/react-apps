import React from "react";
import { Routes, Route } from "react-router-dom";

import PizzaApp from "./components/pizza/PizzaApp";
import TodoApp from "./components/todoapp/TodoApp";
import s from'./App.module.scss'
import Layout1 from "./components/layout/layout1/";
import Main from './components/layout/main/Main'
import MVideo from "./components/layout/layout2";

function App() {
  return (
    <div className={s.main}>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/pizza/*" element={<PizzaApp />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path='/layout1' element={<Layout1/>}/>
        <Route path='/layout2' element={<MVideo/>}/>
      </Routes>
    </div>
  );
}

export default App;
