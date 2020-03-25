import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import BeerList from "./BeerList";

function App() {
  const [value, setValue] = useState(1);
  const precedant = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className="App">
      <button onClick={() => setValue(value + 1)}>suivant</button>
      <button onClick={precedant}>precedant</button>
      <BeerList pageNumber={value} />
    </div>
  );
}

export default App;
