import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log("Clicked", counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    console.log("Clicked", counter);
    setCounter(counter - 1);
  };

  const resetCount = () => {
    console.log("Clicked", counter);
    setCounter(0);
  };

  return (
    <>
      <div className="counter-main">
        <h1>This is a counter.</h1>
        <button>Value is: {counter}</button>
        <br />

        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
