import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./Home";
import Header from "./Header";
import "./scss/app.scss";
import NotFound from "./NotFound";
import Card from "./Card";

export const SearchContext = React.createContext("");

function PizzaApp() {
  const {activeSort,activeCatigory} = useSelector((state) => state.filter);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const order = activeSort.sort.includes("-") ? "desc" : "asc";
  const sortSearch = activeSort.sort.replace("-", "");
  const categorySearch = activeCatigory > 0 ? `category=${activeCatigory}` : "";

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62c8ae128c90491c2cb912cc.mockapi.io/item?${categorySearch}&sortBy=${sortSearch}&order=${order}&title=${searchValue}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, [activeCatigory, activeSort, searchValue]);

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
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
                  setInput={setInput}
                  input={input}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route extract path="card" element={<Card />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default PizzaApp;
