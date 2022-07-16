import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import PizzaApp from "./components/pizza/PizzaApp";
import TodoApp from "./components/todoapp/TodoApp";
import s from'./App.module.scss'
import Nft from "./components/layout/nft/Nft";
import History from "./components/History";

function App() {
  return (
    <div className={s.main}>
      <div className={s.main__header}>
        <Link to="/">Главная</Link>
        <Link to="/pizza">PizzaApp</Link>
        <Link to="/" onClick={()=> window.alert('временно недоступен')}>todoApp</Link>
        <Link  to="/history">History</Link>
        <Link to='/nft'>nft</Link>
      </div>
      <Routes>
        <Route path="/pizza/*" element={<PizzaApp />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path='/nft' element={<Nft/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;
