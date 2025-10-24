import React, { useEffect, useState } from "react";
import { motion as Motion, useAnimationControls, easeInOut } from "motion/react";

const AlternatingSweepBox = ({ delay = 0 }) => {
  // 🎨 Rubik’s Cube colors
  const COLORS = ["#FFFFFF", "#FFD500", "#B71234", "#0046AD", "#FF5800", "#009B48"];

  const [color, setColor] = useState(COLORS[Math.floor(Math.random() * COLORS.length)]);
  const controls = useAnimationControls();

  useEffect(() => {
    let current = color;

    const pickNewColor = () => {
      let next = current;
      while (next === current) next = COLORS[Math.floor(Math.random() * COLORS.length)];
      current = next;
      setColor(next);
    };

    const run = async () => {
      if (delay > 0) await new Promise(r => setTimeout(r, delay * 1000));

      // infinite animation loop
      // eslint-disable-next-line no-constant-condition
      while (true) {
        // 👇 Random duration between 3–10 seconds each cycle
        const duration = 3 + Math.random() * 3;

        await controls.start({
          width: ["0%", "100%", "0%"],
          transition: { duration, ease: easeInOut },
        });

        pickNewColor();
        await new Promise(r => setTimeout(r, 300)); // small repeatDelay
      }
    };

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls, delay]);

  return (
    <div className="relative w-[96px] h-[96px] overflow-hidden bg-black border border-neutral-800 rounded-sm">
      <Motion.div
        className="absolute top-0 left-0 h-full"
        style={{ backgroundColor: color }}
        animate={controls}
        initial={{ width: "0%" }}
      />
    </div>
  );
};

export default AlternatingSweepBox;
