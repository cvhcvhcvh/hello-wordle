import React from "react";
import { getBgColor } from "../wordleUtils";

const Tile = ({ guess, submitted, index, secret }) => {
  let content;
  if (guess[index]) {
    content = guess[index];
  } else {
    content = "";
  }

  // function getBgColor(guess, index) {
  //   let correctLetter = secret[index];
  //   let attemptLetter = guess[index];
  //   if (
  //     attemptLetter === undefined ||
  //     secret.indexOf(attemptLetter) === -1
  //   ) {
  //     return "wrong";
  //   }
  //   if (correctLetter === attemptLetter) {
  //     return "correct";
  //   }
  //   return "present";
  // }
  let color = getBgColor(guess, secret, index);

  function getTile() {
    if (submitted) {
      return (
        <div className={"tile"} style={{ backgroundColor: color }}>
          {content}
        </div>
      );
    } else if (!submitted && content) {
      return <div className="tile active">{content}</div>;
    } else {
      return <div className="tile">{content}</div>;
    }
  }

  return (
    <>
      {getTile()}
    </>
  )
};

export default Tile;
