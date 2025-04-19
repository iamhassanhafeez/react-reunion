import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Hassan hafeez",
    email: "iamhassanhafeez@gmail.com",
  };

  return (
    <>
      <h1 className="bg-green-400">Vite + React</h1>
      <Card dev="hassanHafeez" soneVal={myObj} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
