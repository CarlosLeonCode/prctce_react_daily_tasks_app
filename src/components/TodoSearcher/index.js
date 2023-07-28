import React, { useContext } from "react";
import { AppContext } from "../../context";
import "./todoSearcher.css";

function TodoSearcher() {
  const onChangeField = e => setSearchValue(e.target.value);
  const { searchValue, setSearchValue } = useContext(AppContext);
  return (
    <div className="searcher-wp">
      <input
        placeholder="Type something here"
        className="searcher-input"
        onChange={onChangeField}
        value={searchValue}
      />
    </div>
  );
}

export { TodoSearcher };
