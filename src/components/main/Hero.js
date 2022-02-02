import { useRef, useEffect, useState } from "react";
import Block from "./Block";

//Hero
function Hero() {
  const patternRef = useRef(null);
  const [heightArr, setHeightArr] = useState([]);
  const [widthArr, setWidthArr] = useState([]);
  const [generateNow, setGenerateNow] = useState(true);
  useEffect(() => {
    //pattern
    const patternHeight = patternRef.current.clientHeight;
    const patternWidth = patternRef.current.clientWidth;
    const widthArray = Array.from(
      { length: Math.ceil(patternWidth / 50) },
      (_, i) => i + 1
    );
    const heightArray = Array.from(
      { length: Math.ceil(patternHeight / 50) },
      (_, i) => i + 1
    );
    setHeightArr(heightArray);
    setWidthArr(widthArray);
    const myInterval = setInterval(() => {
      setGenerateNow(!generateNow);
    }, 2000);
    return () => {
      clearInterval(myInterval);
    };
  }, [generateNow]);

  //

  return (
    <div
      className="hero-wrapper overflow-hidden bg-white "
      style={{ backgroundColor: "#252932" }}
    >
      <div className="hero-container h-screen flex ">
        <div className="hero-part1-wrapper flex-1 flex">
          <div className="hero-part-container m-auto w-3/4">
            <p className="text-4xl text-white font-semibold">Hello, I'm</p>
            <p className="text-4xl text-white font-semibold">Nilesh Acharya</p>
            <p className="text-gray-400 tex-xl font-mono tracking-wide w-3/4 mt-2">
              Software Developer currently working as Programmer Analyst for
              backend services at Videosdk.live. I mostly do back-end
              development with sprinkle of front-end here and there.
            </p>
          </div>
        </div>
        {/* design patterns */}
        <div className="hero-part2 overflow-hidden  flex-1 " ref={patternRef}>
          <div className="">
            {widthArr.map((width, i) => {
              return (
                <div className="flex" key={i}>
                  {heightArr.map((height, i) => (
                    <Block key={i} generate={generateNow} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
