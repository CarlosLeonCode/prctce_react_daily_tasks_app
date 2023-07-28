import React, { useContext } from "react";
import { AppContext } from "../../context";
import './todoCounter.css'

function TodoCounter() {
  const {totalTodos, completedTodos} = useContext(AppContext)
  return (
    <>
      <h1 className="subtitle">Your Daily Tasks</h1>
      <h4 className="caption">Completed {completedTodos} to {totalTodos}</h4>
    </>
  );
}

export { TodoCounter };
