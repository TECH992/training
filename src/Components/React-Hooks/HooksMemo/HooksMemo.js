import React from "react";
import { useState, useMemo } from "react";
import logger from "../../../logger"
export default function HooksMemo() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useMemo(() => {
    alert("hi")
    setCalculation(() => count * 2);
  }, [count]);

  const statehanddler = () => {
    setState(!state);
  };
 logger("component re-render")
  const [state, setState] = React.useState(false);
  let Explanation = " when a component re-renders, every value inside of the component is recreated and therefore these value’ references change between renders.every time reinitialize the value become the performance issue of the application.Fixing this issue useMemo got introduce."

  return (
    <div>
      <h1 className="bg-[#FF6666] text-[28px] text-[#fff] font-bold">Stooping Rerender  value using useMemo</h1>
      <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold">Explanation:<span className="text-[20px] text-[#242B2E]"> </span>{Explanation}</p>

      <div className="flex flex-row justify-center">
        <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold">  Output:</p>

        <div >

          <p className="text-[20px] text-[#6A1B4D] font-sans font-bold">Count: {count}</p>
          <button onClick={() => setCount((c) => c + 1)} className="border-[2px] border-[#ff6666] p-4 bg-[#03C6C7]">+</button>
          <p className="text-[20px] text-[#6A1B4D] font-sans font-bold">Calculation: {calculation}</p>
        </div>

        <button onClick={statehanddler} className='border-[4px] rounded-[50%] border-[#120E43] p-4 text-[24px] text-[#FFFFFF] font-bold bg-[#02B290] hover:bg-[#EDC126]'>Parent-render</button>
      </div>

    </div>
  );
}
