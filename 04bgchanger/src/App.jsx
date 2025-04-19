import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("green-400");

  return (
    <>
      <div className="w-full h-screen duration-200">
        <h1>This is area that will chnage bg dynamically.</h1>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-8/10 fixed bottom-20 flex flex-wrap p-10 gap-5 justify-center shadow-lg rounded-full bg-white">
          <Button colorName={"Green"} colorVal={"emerald-400"} />
        </div>
      </div>
    </>
  );
}

export default App;
