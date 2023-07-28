import { useState, useEffect } from 'react'

function useLocalStorage(key, defaultValue){
  const [items, setItems] = useState(defaultValue);
  const [loading, setLoading] = useState(true)

  const saveItems = (newItems) => {
    localStorage.setItem(key, JSON.stringify(newItems))
    setItems(newItems)
  }

  useEffect(() => {
    const todosFromStorage = localStorage.getItem(key)
    let itemsFound;
    if(todosFromStorage){
      itemsFound = JSON.parse(todosFromStorage)
    }else{
      localStorage.setItem(key, JSON.stringify(defaultValue))
      itemsFound = defaultValue
    }
    setItems(itemsFound)
    setLoading(false)
  }, [])

  return {
    items,
    saveItems,
    loading
  }
}

export { useLocalStorage }
