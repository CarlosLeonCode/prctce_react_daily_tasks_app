import React, { createContext, useState } from 'react'
import { useLocalStorage } from "../hooks/useLocalStorage";

const LCLSTORAGEKEY = LCLSTORAGEKEY || `YourDailyTasks_V1`;
const AppContext = createContext()

function AppProvider({children}){
  const [openModal, setOpenModal] = useState(false)
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

  const addTodo = text => {
    
  }

  const onOpenCloseModal = () => (setOpenModal(!openModal))

  return(
    <AppContext.Provider value={{
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      todosToFind,
      completeTodo,
      deleteTodo,
      loading,
      todos,
      saveTodos,
      openModal,
      onOpenCloseModal,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
