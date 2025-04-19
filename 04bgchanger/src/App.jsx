import { useState } from "react";

function App() {
  const [color, setColor] = useState("green-400");

  return (
    <>
      <div className="w-full h-screen duration-200">
        <h1>This is area that will chnage bg dynamically.</h1>
      </div>
      <div className="flex flex-wrap justify-center fixed bottom-20 w-90 p-20">
        <div className="flex flex-wrap gap-5 "></div>
      </div>
    </>
  );
}

export default App;
