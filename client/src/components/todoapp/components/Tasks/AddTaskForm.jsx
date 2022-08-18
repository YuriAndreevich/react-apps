import React, { useState } from "react";
import axios from "axios";

import addSvg from "../../img/add.svg";

function AddTaskForm({ activeItem, onAddTask }) {
  const [visibleForm, setVisibleForm] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleFormVisible = () => {
    setVisibleForm(!visibleForm);
    setInputValue('');
  };
  const addTask = () => {
    const obj = {
      id: activeItem.id,
      listId: activeItem.id,
      text: inputValue,
      completed: false,
    };
    axios
      .post("https://62d09a6ad9bf9f17058b7196.mockapi.io/tasks?", obj)
      .then(({ data }) => {
        onAddTask(activeItem.id, data);
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
          <button onClick={inputValue !== '' ? addTask() : () => window.alert('Введите название списка')} className="todo__button">
            Добавить задачу
          </button>
          <button onClick={toggleFormVisible} className="todo__button button--gray">
            Отмена
          </button>
        </div>
      )}
    </div>
  );
}

export default AddTaskForm;
