import React from "react";

function Button({ colorName, colorVal }) {
  return (
    <button className={`bg-${colorVal} px-10 py-5 outline-none rounded-full`}>
      {colorName}
    </button>
  );
}

export default Button;
