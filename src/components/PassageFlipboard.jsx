// PassageFlipboard.jsx
import React from "react";
import FlipTile from "./FlipTile";

// helper: turn a whitespace token into literal spacing
function SpaceSpan({ space }) {
  return <span style={{ whiteSpace: "pre" }}>{space}</span>;
}

/**
 * Props:
 * - passage: string
 * - letterTick: ms per flip step inside each tile
 * - perLetterStartGap: ms delay between starting consecutive letters in a word
 * - perWordGap: extra ms gap before starting the first letter of the next word
 */
export default function PassageFlipboard({
  passage = "SCU rocks!",
  letterTick = 70,
  perLetterStartGap = 120,
  perWordGap = 400,
}) {
  // split into words & spaces, preserving spaces via capture group
  const tokens = passage.split(/(\s+)/); // ["Hello", "  ", "world", "!"]

  // We will compute a running startDelay so tiles start step-by-step.
  let runningDelay = 0;

  return (
    <div className="flex flex-wrap items-center gap-y-3">
      {tokens.map((tok, idx) => {
        // whitespace: render as literal spaces
        if (/^\s+$/.test(tok)) {
          // add a little gap for timing continuity (optional)
          runningDelay += perWordGap;
          return <SpaceSpan key={`space-${idx}`} space={tok} />;
        }

        // non-space token (word or punctuation chunk)
        const chars = [...tok];

        // build a group of FlipTiles for the word
        const wordTiles = chars.map((ch, i) => {
          const thisStart = runningDelay + i * perLetterStartGap;
          return (
            <FlipTile
              key={`ch-${idx}-${i}`}
              target={ch}
              startDelay={thisStart}
              tick={letterTick}
              className="mx-[2px]"
            />
          );
        });

        // after scheduling this word, add delay for the next word
        runningDelay += chars.length * perLetterStartGap + perWordGap;

        return (
          <span key={`word-${idx}`} className="inline-flex items-center">
            {wordTiles}
          </span>
        );
      })}
    </div>
  );
}
