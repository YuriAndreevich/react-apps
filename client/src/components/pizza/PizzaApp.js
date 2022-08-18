import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios'

import Home from "./Home";
import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import back from '../../images/back.svg'
import Header from "./Header";
import "./scss/app.scss";
import NotFound from "./NotFound";
import Card from "./Card";

export const SearchContext = React.createContext("");

function PizzaApp() {
  const { sort, catigoryId } = useSelector((state) => state.filter);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const order = sort.sort.includes("-") ? "desc" : "asc";
  const sortSearch = sort.sort.replace("-", "");
  const categorySearch = catigoryId > 0 ? `category=${catigoryId}` : "";

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://62c8ae128c90491c2cb912cc.mockapi.io/item?${categorySearch}&sortBy=${sortSearch}&order=${order}&title=${searchValue}`)
      .then(res => {
        setItems(res.data)
        setIsLoading(false)
      }
      )
    // eslint-disable-next-line
  }, [catigoryId, sort, searchValue]);

  return (
    <>
      <Link to='/'>
        <SVG src={back} style={{ height: '30px', position: 'absolute', top: '1px', left: '3px' }} />
      </Link>
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
    </>
  );
}

export default PizzaApp;
