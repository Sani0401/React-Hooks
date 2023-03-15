import React, { useState } from "react";

function App() {
  const [count, incCount] = useState(1);

  function increase() {
    incCount(count + 1);
  }

  function decrease() {
    incCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
