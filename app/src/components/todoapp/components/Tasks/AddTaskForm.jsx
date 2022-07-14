import React, { useState } from "react";
import axios from "axios";

import addSvg from "../../img/add.svg";

function AddTaskForm({ list, onAddTask }) {
  const [visibleForm, setVisibleForm] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleFormVisible = () => {
    setVisibleForm(!visibleForm);
    setInputValue("");
  };
  const addTask = () => {
    const obj = {
      id: list.id,
      listId: list.id,
      text: inputValue,
      completed: false,
    };
    axios
      .post("http://localhost:3001/tasks", obj)
      .then(({ data }) => {
        console.log(data);
        onAddTask(list.id, data);
        toggleFormVisible();
    });
  };

  return (
    <div className="tasks__form">
      {!visibleForm ? (
        <div className="tasks__form-new">
          <img src={addSvg} alt="add icon" />
          <span onClick={toggleFormVisible}>Новая задача</span>
        </div>
      ) : (
        <div className="tasks__form-block">
          <input
            className="field"
            value={inputValue}
            type="text"
            placeholder="Текст задачи"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTask} className="todo__button">
            Добавить задачу
          </button>
          <button onClick={toggleFormVisible} className="button button--gray">
            Отмена
          </button>
        </div>
      )}
    </div>
  );
}

export default AddTaskForm;
