import React from "react";

const Key = ({ value, index, history, currentGuess, secret, onKey }) => {
  // function getBgColor(guess, secret) {
  //   for (let i = 0; i < guess.length; i++){
  //     let correctLetter = secret[i];
  //     let attemptLetter = guess[i];
  //     if (attemptLetter === undefined || secret.indexOf(attemptLetter) === -1) {
  //       return "wrong";
  //     }
  //     if (correctLetter === attemptLetter) {
  //       return "correct";
  //     }
  //     return "present";
  //   }
  // }
  // let color = getBgColor(currentGuess, secret);
  return (
    <button
      className="key"
      onClick={() => {
        onKey(value)
      }}
    >
      {value}
    </button>
  );
};

export default Key;
