import React from "react";
import "./todoItem.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

function TodoItem({ text, onComplete, onDelete, completed }) {
  const state = completed ? "check" : "pendding";
  return (
    <li className={`list-item ${state}`}>
      {!completed ? (
        <button className={`done-btn type-${state}`} onClick={onComplete}>
          <BsCheckCircleFill />
        </button>
      ) : (
        <div></div>
      )}

      <p>{text}</p>
      <button className={`delete-btn type-${state}`} onClick={onDelete}>
        <AiFillDelete />
      </button>
    </li>
  );
}

export { TodoItem };
