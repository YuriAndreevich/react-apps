import React from "react";

function Catigories({activeCatigory, onClickCatygory}) {

  const catigory = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {catigory.map((value, id) => (
          <li
            key={id}
            onClick={() => onClickCatygory(id)}
            className={activeCatigory === id ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catigories;
