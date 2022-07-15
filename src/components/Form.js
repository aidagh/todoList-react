import React from "react";
const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  //   const listHandler = (e) => {
  //     e.preventDefault();
  //   };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      console.log({ ...todos });
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.floor(Math.random() * 1000),
        },
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
        maxLength={20}
      />

      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        Add a New item
      </button>
      {/* <button className="todo-button" onClick={listHandler}>
        Add a New List
      </button> */}
    </form>
  );
};

export default Form;
