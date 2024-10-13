import React, { useState } from "react";
import Button from "./Button";

const Play = ({
  getRandomNumber,
  setScore,
  setActualNumber,
  actualNumber,
  setShowRules,
}) => {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 6) + 1);
  const [alrt, setAlert] = useState(false);

  const genearteRanNum = () => {
    if (actualNumber) {
      const newRandomNum = Math.floor(Math.random() * 6) + 1;
      setRandomNum(newRandomNum);
      getRandomNumber(newRandomNum);
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  const reset = () => {
    setScore(0);
    setActualNumber(null);
    setRandomNum(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <p
        className={`${
          alrt ? "visible" : "hidden"
        } text-xl text-center font-semibold pb-2 text-red-600`}
      >
        Please Select the number !!!
      </p>
      <img
        onClick={genearteRanNum}
        src={`/dice_${randomNum}.png`}
        className="cursor-pointer h-48 w-48"
        alt=""
      />
      <p className="text-xl text-center  font-semibold pb-2">
        Click on dice to Roll
      </p>
      <button
        onClick={reset}
        className={
          " text-black py-1 rounded-xl border-red-600 border  w-36 font-semibold text-xl active:bg-obsidian active:text-snow duration-[0.2s] ease-in-out "
        }
      > Reset</button>
      <Button
        className={"text-snow bg-obsidian w-36 font-semibold text-md"}
        content={"Show Rules"}
        onClick={() => setShowRules(true)}
      ></Button>
    </div>
  );
};

export default Play;
