import React from "react";
import { Routes, Route } from "react-router-dom";

import PizzaApp from "./components/pizza/PizzaApp";
import TodoApp from "./components/todoapp/TodoApp";
import s from'./App.module.scss'
import Layout1 from "./components/layout/layout1/";
import Navbar from './components/layout/main/Main__navbar'
import MVideo from "./components/layout/layout2";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/filterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={s.main}>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      {/* <Navbar/>
      <Routes>
        <Route path="/pizza/*" element={<PizzaApp />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path='/layout1' element={<Layout1/>}/>
        <Route path='/layout2' element={<MVideo/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
