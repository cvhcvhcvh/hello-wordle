import React from "react";

const Key = ({ value }) => {
  return (
    <button
      className="key"
      onClick={() => {
        // ! handleKey(buttonKey)
      }}
    >
      {value}
    </button>
  );
};

export default Key;
