import React from "react";
import "./List.scss";
import classNames from "classnames";
import Badge from "../Badge";
import axios from "axios";

import removeSVG from "../../img/remove.svg";

const List = ({ items, isRemovable, onClick, onRemove, onClickItem, activeItem, colors }) => {
  const removeList = (item) => {
    if (window.confirm("вы действительно хотите удалить список?"))
      axios.delete("https://62d09a6ad9bf9f17058b7196.mockapi.io/item?lists=" + item.id).then(() => {
      onRemove(item.id);
      });
  };

  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active:  activeItem && activeItem.id === item.id })}
          onClick={onClickItem ? () => onClickItem(item) : null}
          >
        
          <i>{item.icon ? item.icon : <Badge color={colors[index]} />}</i>
          <span>
          {item.name}
          {item.tasks && item.tasks.length > 0 && `(${item.tasks.length})`}
          </span>
          {isRemovable && (
            <img
              className="list__remove-icon"
              src={removeSVG}
              alt="Remove icon"
              onClick={() => removeList(item)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
