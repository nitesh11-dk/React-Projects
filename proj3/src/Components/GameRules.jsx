import React from "react";

const GameRules = ({ setShowRules }) => {
  return (
    <div className="p-4   absolute bottom-0 left-0 text-snow bg-deep-navy-blue opacity-95">
      <h2 className="text-2xl font-bold mb-4">
        Updated Game Rules:{" "}
        <span
          className="absolute right-2 top-0 text-3xl"
          onClick={() => setShowRules(false)}
        >
          ❌
        </span>
      </h2>
      <ul className="list-disc pl-4 leading-6">
        <li>Select a number and click on the dice image.</li>
        <li>
          If your selected number matches the dice number:
          <span className="text-green-500 font-bold"> Score +1 </span>
          (no effect on attempts).
        </li>
        <li>
          If you have 3 incorrect guesses in a row:
          <span className="text-red-500 font-bold"> Score -1 </span>
          (attempts reset to 3).
        </li>
        <li>Each incorrect guess decreases attempts by 1.</li>
      </ul>
    </div>
  );
};

export default GameRules;
