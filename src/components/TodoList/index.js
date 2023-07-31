import React from "react";
import './styles.css'

function TodoList({ children }) {
  return (
    <>
      <ul>{children}</ul>
    </>
  );
}

export { TodoList };
