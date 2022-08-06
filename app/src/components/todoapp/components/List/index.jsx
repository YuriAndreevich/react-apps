import React from "react";
import "./List.scss";
import classNames from "classnames";
import Badge from "../Badge";
import axios from "axios";

import removeSVG from "../../img/remove.svg";

const List = ({ items, isRemovable, onClick, onRemove, onClickItem, activeItem }) => {
  const removeList = (item) => {
    if (window.confirm("вы действительно хотите удалить список?"))
      axios.delete("http://localhost:3001/lists/" + item.id).then(() => {
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
        
          <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
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
