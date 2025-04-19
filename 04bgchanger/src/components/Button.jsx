import React from "react";

function Button({ colorName, colorValue, onClick }) {
  return (
    <button
      className={`${colorValue} capitalize px-10 py-5 outline-none rounded-full cursor-auto transition-all duration-300 ease-in-out 
                 hover:scale-105`}
      onClick={onClick}
    >
      {colorName}
    </button>
  );
}

export default Button;
