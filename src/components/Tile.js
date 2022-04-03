import React, { useState, useEffect } from "react";
import { getBgColor } from "../wordleUtils";

const Tile = ({ guess, submitted, index, secret }) => {
  let [animateColor, setAnimateColor] = useState("");
  let GREY = "#3A3A3C";
  let GREEN = "#538d4e";
  let YELLOW = "#b59f3b";

  let content;
  if (guess[index]) {
    content = guess[index];
  } else {
    content = "";
  }

  function color() {
    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(getBgColor(guess, secret, index));
      }, 2000);
    });
    return promise;
  }

  // color().then(function (value) {
  //   console.log("value is", value);
  // });

  async function test() {
    const result = await color();
  }

  // let color = getBgColor(guess, secret, index); // ?this works

  // let color = setTimeout(getBgColor(guess, secret, index), 2000); // !this doesn't work

  const style = {
    backgroundColor: "",
    border: "none",
    animationDelay: (index * 300) / 2 + "ms",
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
