// FlipTile.jsx
import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";

export default function FlipTile({
  target = "A",
  alphabet,
  startDelay = 0,      // ms before this tile begins flipping
  tick = 70,           // ms per flip step
  className = "",
}) {
  const letters = alphabet ?? [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    '0','1','2','3','4','5','6','7','8','9',
    '!','"','#','$','%','&',"'",'(',')','*','+',
    ',','-','.','/',';',':','<','=','>','?','@',
    '[','\\',']','^','_','`','{','|','}','~',' '
  ];

  const [current, setCurrent] = useState("");

  useEffect(() => {
    let i = Math.floor(Math.random() * letters.length); // random start for variety
    const targetIndex = letters.indexOf(target);
    if (targetIndex === -1) return; // ignore unknown chars

    let intervalId;
    const starter = setTimeout(() => {
      intervalId = setInterval(() => {
        setCurrent(letters[i]);
        i = (i + 1) % letters.length;

        // stop right after we would display target next
        if (letters[i] === target) {
          setCurrent(target);
          clearInterval(intervalId);
        }
      }, tick);
    }, Math.max(0, startDelay));

    return () => {
      clearTimeout(starter);
      if (intervalId) clearInterval(intervalId);
    };
  }, [target, tick, startDelay]);

  // flip animation each time the letter changes
  return (
    <div className={`w-8 h-10 md:w-10 md:h-12 bg-black border border-neutral-700 rounded-md flex items-center justify-center ${className}`}>
      <Motion.div
        key={current} // re-animate on each change
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.12 }}
        className="text-green-500 text-xl md:text-2xl font-semibold select-none leading-none"
      >
        {current || " "}
      </Motion.div>
    </div>
  );
}
