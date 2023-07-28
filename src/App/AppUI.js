import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearcher } from "../components/TodoSearcher";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { NewItem } from "../components/NewItem";

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  todosToFind,
  completeTodo,
  deleteTodo,
  loading
}) {
  return (
    <>
      <div className="left-side">
        <NewItem />
      </div>
      <div className="right-side">
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <TodoSearcher
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {(loading) && <h1>Loading!!</h1>}
          {(todosToFind.length === 0) && <span>Hey! it is time to plan your day 😃</span>}
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
    </>
  );
}

export { AppUI };
