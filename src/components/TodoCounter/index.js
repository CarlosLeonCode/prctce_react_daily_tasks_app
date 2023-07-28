import React from "react";
import './todoCounter.css'

function TodoCounter({total, completed}) {
  return (
    <>
      <h1 className="subtitle">Your Daily Tasks</h1>
      <h4 className="caption">Completed {completed} to {total}</h4>
    </>
  );
}

export { TodoCounter };
