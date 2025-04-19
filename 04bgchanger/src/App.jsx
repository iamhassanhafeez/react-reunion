import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("green-400");
  const colorData = [
    {
      colorName: "green",
      colorVal: "green-400",
    },
    {
      colorName: "emerald",
      colorVal: "emerald-400",
    },
    {
      colorName: "teal",
      colorVal: "teal-400",
    },
    {
      colorName: "cyan",
      colorVal: "cyan-400",
    },
    {
      colorName: "sky",
      colorVal: "sky-400",
    },
    {
      colorName: "indigo",
      colorVal: "indigo-400",
    },
    {
      colorName: "purple",
      colorVal: "purple-400",
    },
    {
      colorName: "fuchsia",
      colorVal: "fuchsia-400",
    },
    {
      colorName: "pink",
      colorVal: "pink-400",
    },
  ];

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
