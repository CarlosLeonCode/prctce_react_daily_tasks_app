import React, { useContext } from "react";
import { AppContext } from "../../context";
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { Modal } from "../Modal";
import "./newItem.css";

function NewItem() {
  const { addTodo, openModal, onOpenCloseModal } = useContext(AppContext);

  return (
    <div className="new-task">
      <h2 className="subtitle">Create a new task</h2>
      <form onSubmit={addTodo}>
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
