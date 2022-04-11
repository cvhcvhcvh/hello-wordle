import React, { useState, useEffect } from "react";
import { getBgColor, getBorderColor, words } from "../wordleUtils";

const Tile = ({ guess, submitted, current, index, secret }) => {
  let [animateColor, setAnimateColor] = useState("#111");
  let [borderColor, setBorderColor] = useState("");
  const [isAnimating, setIsAnimating] = useState(false)

  let content;
  if (guess[index]) {
    content = guess[index];
  } else {
    content = "";
  }

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => {
      setAnimateColor(getBgColor(guess, secret, index));
      setIsAnimating(false)
    }, ((index + 2) * 500) / 2);
    return () => {
      clearTimeout(timer);
    };
  }, [submitted]);




  const style = {
    backgroundColor: animateColor,
    border: "",
    animationDelay: (index * 500) / 2 + "ms",
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

  return <>{tile()}</>;
};
export default Tile;
