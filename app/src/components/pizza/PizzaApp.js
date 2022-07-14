import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import "./scss/app.scss";
import NotFound from "./NotFound";
import Card from "./Card";

function PizzaApp() {
  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCatigory, setActiveCatigory] = useState(0);
  const [activeSort, setActiveSort] = useState({
    name: "популярности (по убыванию)",
    sort: "rating",
  });

  const onClickCatygory = (id) => {
    setActiveCatigory(id);
  };

  const order = activeSort.sort.includes("-") ? "desc" : "asc";
  const sortSearch = activeSort.sort.replace("-", "");
  const categorySearch = activeCatigory > 0 ? `category=${activeCatigory}` : "";

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62c8ae128c90491c2cb912cc.mockapi.io/item?${categorySearch}&sortBy=${sortSearch}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
      // eslint-disable-next-line
  }, [activeCatigory, activeSort]); 

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route
            extract
            path="/"
            element={
              <Home
                items={items}
                isLoading={isLoading}
                activeCatigory={activeCatigory}
                onClickCatygory={(id) => onClickCatygory(id)}
                setActiveSort={setActiveSort}
                activeSort={activeSort}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route extract path="card" element={<Card />} />
          </Routes>
      </div>
    </div>
  );
}

export default PizzaApp;
