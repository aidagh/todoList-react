import React from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
    }
    setInputText("");
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />

      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        Add a New item
      </button>
      {/* <button className="addList-btn" type="submit">
        Add a New List
      </button> */}
      {/* <div className="select">
        <select className="filter-todo" name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div> */}
    </form>
  );
};

export default Form;
