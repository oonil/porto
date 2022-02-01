import React from "react";
import { useEffect, useState } from "react";

function Block(props) {
  const [color, setColor] = useState("");
  const [randomess, setRandomness] = useState(false);
  const radiusStyle =
    "border-top-left-radius:50%;border-bottom-right-radius:50%;";
  useEffect(() => {
    const randomNessFactor = 0.5;
    setColor(getColor());
    setRandomness(Math.random() < randomNessFactor);
  }, [props]);
  const getColor = () => {
    return (
      "hsl(" +
      360 * Math.random() +
      ","(25 + 70 * Math.random()) +
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
        borderTopLeftRadius: randomess ? "50%" : "",
        borderTopRightRadius: randomess ? "50%" : "",
        borderBottomLeftRadius: randomess && "50%",
        borderBottomRightRadius: randomess ? "50%" : "",
      }}
      className={`h-12 w-12 rounded`}
    ></div>
  );
}

export default Block;
