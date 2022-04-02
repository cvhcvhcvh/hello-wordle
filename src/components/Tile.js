import React, { useState } from "react";
import { getBgColor } from "../wordleUtils";

const Tile = ({ guess, submitted, index, secret }) => {
  let [animated, setAnimated] = useState(false);

  let content;
  if (guess[index]) {
    content = guess[index];
  } else {
    content = "";
  }

  let color = getBgColor(guess, secret, index);

  function getFlip(guess) {
    for (let i = 0; i < guess.length; i++) {}
  }

  function getTile() {
    let div;
    if (submitted) {
      div = (
        <div
          className={"tile flipIn"}
          style={{ backgroundColor: color, border: "none" }}
        >
          {content}
        </div>
      );
    } else if (!submitted && content) {
      div = <div className="tile active">{content}</div>;
    } else {
      div = <div className="tile">{content}</div>;
    }
    return div;
  }
  let tile = getTile();

  // function isActive() {
  //   if (content && !submitted) {
  //     return "tile active";
  //   }
  //   return "tile";
  // }

  return <>{tile}</>;
  // return (
  //   <div className={isActive()}>
  //     <div className="inner">
  //       <div className="front">{content}</div>
  //       <div className="back">{content}</div>
  //     </div>
  //   </div>
  // );
};

export default Tile;
