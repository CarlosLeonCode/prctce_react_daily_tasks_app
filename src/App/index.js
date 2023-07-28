import React, { useState } from "react";
import { AppUI } from "./AppUI";
import "./App.css";
import { useLocalStorage } from "../hooks/useLocalStorage";
const LCLSTORAGEKEY = "yourDailyTasks_V1";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const { 
    items: todos, 
    saveItems: saveTodos,
    loading,  
  } = useLocalStorage(LCLSTORAGEKEY, []);
  const completedTodos = todos.filter(i => i.completed).length;
  const totalTodos = todos.length;
  const todosToFind = todos.filter(item =>
    item.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = key => {
    const newTodos = [...todos];
    newTodos[key].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = key => {
    const newTodos = [...todos];
    newTodos.splice(key, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todosToFind={todosToFind}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
    />
  );
}

export default App;
