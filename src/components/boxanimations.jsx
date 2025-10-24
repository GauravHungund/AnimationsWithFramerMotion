import React from "react";
import { motion as Motion } from "motion/react";

const BoxAnimations = () => {
  const numBoxes = 20;

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="relative flex gap-4">
        {[...Array(numBoxes)].map((_, i) => (
          <Motion.div
            key={i}
            className="w-6 h-6 border-2 bg-purple-600 rounded-full"
            animate={{
              y: [0, -100, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15, // 👈 stagger each box
            }}
          />
        ))}
        <div className="absolute flex gap-4"> 
        {[...Array(numBoxes)].map((_, i) => (
          <Motion.div
            key={i}
            className="w-6 h-6 border-2 bg-pink-500 rounded-full"
            animate={{
              y: [-100, 0, -100],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15, // 👈 stagger each box
            }}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default BoxAnimations;
