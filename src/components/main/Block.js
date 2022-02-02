import React from "react";
import { useEffect, useState } from "react";

function Block(props) {
  const [color, setColor] = useState("");
  const [randomess, setRandomness] = useState(false);
  useEffect(() => {
    const randomNessFactor = 0.2; //decrease blocks count;
    setColor(getColor());
    setRandomness(Math.random() < randomNessFactor);
  }, [props.generate]);
  const getColor = () => {
    return (
      "hsl(" +
      360 * Math.random() +
      "," +
      (30 + 70 * Math.random()) +
      "%," +
      (85 + 10 * Math.random()) +
      "%)"
    );
  };

  //
  return (
    <div
      style={{
        background: randomess && color,
        color: randomess || "white",
        // borderRadius: "50%",
        // boxShadow:
        //   "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",
        // borderTopLeftRadius: randomess && "50%",
        // borderTopRightRadius: randomess ? "50%" : "",
        // borderBottomLeftRadius: randomess && "50%",
        // borderBottomRightRadius: randomess ? "50%" : "",
        transitionDuration: "2s",
      }}
      className={`h-12 w-12 rounded  flex font-mono `}
    >
      <span className="m-auto"></span>
    </div>
  );
}

export default Block;
