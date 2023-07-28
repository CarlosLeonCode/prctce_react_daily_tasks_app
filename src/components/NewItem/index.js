import React from "react";
import './newItem.css'

function NewItem() {
  const onSubmit = () => {
    console.log('clicked!')
  }

  return(
    <div className="new-task">
      <h2 className="subtitle">Create a new task</h2>
      <div className="form-group">
        <label className="label">Task Name</label>
        <input type="text" placeholder="write a task here..." />
      </div>
      <button className="submit-btn" onClick={onSubmit}>Create Task</button>
    </div>
  );
}

export { NewItem };
