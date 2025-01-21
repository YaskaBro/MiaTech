import React from "react";
import ItemList from "./components/ItemList"

const App = () => {
  const frutta = ["banana", "ciliegia", "fragola", "kiwi"];

  return (
    <div>
      <h1>Lista della frutta:</h1>
      <ItemList items={frutta} />
    </div>
  );
};

export default App;