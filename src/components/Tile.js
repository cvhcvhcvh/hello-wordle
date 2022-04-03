import React, { useState, useEffect } from "react";
import { getBgColor, getBorderColor } from "../wordleUtils";

const Tile = ({ guess, submitted, index, secret }) => {
  let [animateColor, setAnimateColor] = useState("#111");
  let [borderColor, setBorderColor] = useState("")

  let content;
  if (guess[index]) {
    content = guess[index];
  } else {
    content = "";
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateColor(getBgColor(guess, secret, index));
    }, ((index + 2) * 330)/2);
    return () => {
      clearTimeout(timer);
    };
  }, [submitted]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBorderColor(getBorderColor(guess, secret, index));
    }, ((index + 2) * 330) / 2);
    return () => {
      clearTimeout(timer);
    };
  }, [submitted]);


  const style = {
    backgroundColor: animateColor,
    border: "",
    animationDelay: (index * 175) / 2 + "ms",
  };

  const tile = function getTile() {
    let div;
    if (submitted) {
      div = (
        <div className={"tile flipIn"} style={style}>
          {content}
        </div>
      );
    } else if (!submitted && content) {
      div = <div className="tile active">{content}</div>;
    } else {
      div = <div className="tile">{content}</div>;
    }
    return div;
  };

  // function isActive() {
  //   if (content && !submitted) {
  //     return "tile active";
  //   }
  //   return "tile";
  // }

  return <>{tile()}</>;
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
