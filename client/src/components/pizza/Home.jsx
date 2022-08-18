import React from 'react'

import { Skeleton } from "./PizzaBlock/Skeleton";
import Sort from "./Sort";
import Pizzablock from "./PizzaBlock";
import Catigories from "./Catigories";


function Home({items, isLoading, activeSort, setActiveSort}) {
  return (
    <div className="container">
    <div className="content__top">
      <Catigories />
      <Sort activeSort={activeSort}  setActiveSort={(i)=> setActiveSort(i)} />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {isLoading
        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        : items.map((obj) => <Pizzablock key={obj.id} {...obj} />)}
    </div>
  </div>
  )
}

export default Home