import { useState } from "react";

function App() {
  return (
    <>
      <div className=" w-full h-screen flex flex-wrap justify-center items-center">
        <div className="flex flex-col w-[40%] mx-auto shadow-md rounded-lg bg-emerald-400 py-4 px-8 gap-2">
          <h1 className="text-4xl text-center text-white">
            Password Generator
          </h1>
          <input
            className="outline-none w-full py-1 px-3 bg-white rounded-full"
            type="text"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                className="cursor-pointer"
              />
              <label>Length: </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" id="numberInput" />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" id="characterInput" />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
