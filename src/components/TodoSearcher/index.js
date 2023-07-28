import React from "react";
import './todoSearcher.css'

function TodoSearcher({
  searchValue, 
  setSearchValue,
}) {
  const onChangeField = e => setSearchValue(e.target.value)
  return (
    <div className="searcher-wp">
      <input 
        placeholder="Type something here" 
        className="searcher-input" 
        onChange={onChangeField}
        value={searchValue}
      />
    </div>
  )
}

export { TodoSearcher };
