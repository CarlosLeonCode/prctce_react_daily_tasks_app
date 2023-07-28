import React from "react";
import { AppUI } from "./AppUI";
import { AppProvider } from "../context"
import "./App.css";

function App() {
  return (
    <AppProvider>
      <AppUI />
    </AppProvider>

  );
}

export default App;
