import React, { useContext } from "react";
import { AppContext } from "../../context";
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { Modal } from "../Modal";
import "./newItem.css";

function NewItem() {
  const { todos, saveTodos, openModal, onOpenCloseModal } = useContext(AppContext);

  const onSubmitTask = e => {
    try {
      e.preventDefault();
      const newTask = e.target.querySelector("input").value;
      if (newTask.trim().length === 0) {
        console.error("You must write something");
      } else {
        saveTodos([...todos, {
          text: newTask,
          completed: false
        }]);
      }
    } catch {
      console.error("Ooops, something bad happend!");
    }
  };

  return (
    <div className="new-task">
      <h2 className="subtitle">Create a new task</h2>
      <form onSubmit={onSubmitTask}>
        <div className="form-group">
          <label className="label">Task Name</label>
          <input type="text" placeholder="write a task here..." />
        </div>
          <button className="submit-btn">Create Task</button>
      </form>
      <button className="copyrght-btn" onClick={onOpenCloseModal}>
        <AiFillCopyrightCircle />
      </button>
      {openModal && (
        <Modal>
          logic here
        </Modal>
      )}
    </div>
  );
}

export { NewItem };
