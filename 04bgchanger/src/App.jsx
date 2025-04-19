import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("bg-slate-400");
  const colorData = [
    {
      colorName: "green",
      colorVal: "bg-green-400",
    },
    {
      colorName: "emerald",
      colorVal: "bg-emerald-400",
    },
    {
      colorName: "teal",
      colorVal: "bg-teal-400",
    },
    {
      colorName: "cyan",
      colorVal: "bg-cyan-400",
    },
    {
      colorName: "sky",
      colorVal: "bg-sky-400",
    },
    {
      colorName: "indigo",
      colorVal: "bg-indigo-400",
    },
    {
      colorName: "purple",
      colorVal: "bg-purple-400",
    },
    {
      colorName: "fuchsia",
      colorVal: "bg-fuchsia-400",
    },
    {
      colorName: "pink",
      colorVal: "bg-pink-400",
    },
  ];

  return (
    <>
      <div className={`w-full h-screen duration-200 ${color}`}>
        <h1 className="text-white text-2xl font-bold">
          This is area that will chnage bg dynamically.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-8/10 fixed bottom-20 flex flex-wrap p-10 gap-5 justify-center shadow-lg rounded-full bg-white">
          {colorData.map(({ colorName, colorVal }) => (
            <Button
              colorName={colorName}
              colorValue={colorVal}
              key={colorName}
              onClick={() => setColor(colorVal)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
