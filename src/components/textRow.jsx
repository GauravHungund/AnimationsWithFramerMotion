import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import FlipBox from "./flipbox";

const TextRow = () => {
  const boxHeight = 20;
  const screenHeight = window.innerHeight;

  // 🎲 Random stream length (how many characters in the waterfall)
  const streamLength = Math.floor(5 + Math.random() * 15); // 5–20 symbols
  const totalBoxes = Math.floor(screenHeight / boxHeight);

  // 🚀 Each stream moves downward
  const [offset, setOffset] = useState(-Math.random() * screenHeight); // random starting offset
  const [speed] = useState(1 + Math.random() * 2); // random scroll speed (px per frame)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev + speed;
        // when the stream goes below the bottom, respawn it above screen
        return next > screenHeight + streamLength * boxHeight
          ? -Math.random() * screenHeight
          : next;
      });
    }, 30); // smaller interval = smoother flow

    return () => clearInterval(interval);
  }, [speed, screenHeight, streamLength]);

  return (
    <div className="relative w-[20px] h-screen overflow-hidden flex justify-center">
      <Motion.div
        style={{
          transform: `translateY(${offset}px)`,
        }}
        className="flex flex-col justify-start items-center"
      >
        {[...Array(streamLength)].map((_, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <FlipBox />
          </Motion.div>
        ))}
      </Motion.div>
    </div>
  );
};

export default TextRow;
