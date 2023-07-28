import React, { useContext } from "react";
import { AppContext } from "../../context";
import './todoCounter.css'

function TodoCounter() {
  const {total, completed} = useContext(AppContext)

  return (
    <>
      <h1 className="subtitle">Your Daily Tasks</h1>
      <h4 className="caption">Completed {completed} to {total}</h4>
    </>
  );
}

export { TodoCounter };
