import React, { useContext } from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearcher } from "../components/TodoSearcher";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { NewItem } from "../components/NewItem";
import { AppContext } from "../context";

function AppUI() {
  const { todosToFind, completeTodo, deleteTodo, loading } = useContext(AppContext);

  return (
    <div className="card-app">
      <NewItem />
      <div className="divisor-container">
        <hr />
      </div>
      <TodoCounter />
      <TodoSearcher />
      <TodoList>
        {loading && <h1>Loading!!</h1>}
        {todosToFind.length === 0 && (
          <span>Hey! it is time to plan your day!</span>
        )}
        {todosToFind.map((item, ind) => (
          <TodoItem
            text={item.text}
            key={ind}
            completed={item.completed}
            onComplete={() => completeTodo(ind)}
            onDelete={() => deleteTodo(ind)}
          />
        ))}
      </TodoList>
    </div>
  );
}

export { AppUI };
