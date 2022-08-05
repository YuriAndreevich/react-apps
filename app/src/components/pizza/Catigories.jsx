import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";

function Catigories() {
  const catigory = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const activeCatigory = useSelector((state) => state.filter.categoryId);

  const dispatch = useDispatch();
  const onClickCatygory = (id) => {
    dispatch(setCategoryId(id));
  };
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
