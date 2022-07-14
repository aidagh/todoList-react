import React from "react";
// import { icons } from "react-icons/lib";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={todo.completed ? "todo-item" : "completed"}>{text}</li>
      <div className="icons">
        <AiOutlineEdit className="edit" />
        <AiOutlineCheckCircle onChange={completeHandler} className="check" />
        <BsTrash onClick={deleteHandler} className="trash" />
      </div>
    </div>
  );
};

export default Todo;
