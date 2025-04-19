import React from "react";

function Button({ colorName, colorValue, onClick }) {
  return (
    <button
      className={`bg-${colorValue} capitalize px-10 py-5 outline-none rounded-full`}
      onClick={onClick}
    >
      {colorName}
    </button>
  );
}

export default Button;
