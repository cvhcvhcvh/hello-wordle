import React from "react";

const Key = ({ value, index, history, currentGuess, secret, onKey }) => {


  let keyboardButtons = new Map()
  
  function updateKeyboard() {

  }

  return (
    <button
      className="key"
      onClick={() => {
        onKey(value);
      }}
    >
      {value}
    </button>
  );
};

export default Key;
