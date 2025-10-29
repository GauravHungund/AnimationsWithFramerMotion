// FlipBox.jsx
import React, { useState, useEffect } from "react";

export default function FlipBox() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&".split("");
  const [char, setChar] = useState("");

  useEffect(() => {
    let i = Math.floor(Math.random() * letters.length);
    const interval = setInterval(() => {
      setChar(letters[i]);
      i = (i + 1) % letters.length;
    }, 80); // adjust flip speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[20px] h-[20px] flex items-center justify-center">
      <h1 className="text-[#00ff99] text-lg font-mono text-glow opacity-80">
        {char}
      </h1>
    </div>
  );
}
