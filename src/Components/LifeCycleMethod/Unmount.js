import React from "react";
import { useState, useEffect } from "react";
import unMount from "../../image/unMount.png"
import unMountex from "../../image/unMountex.png"
export default function Unmount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <h1 className="bg-[#FF6666] text-[28px] text-[#fff] font-bold">Functional UnMount LifeCycle Method</h1>
      <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold">Explanation:<span className="text-[20px] text-[#242B2E]">We will call  UnMount LifeCycleMethod to remove something from the dom.It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners, or clearing any data structures that were set up during the mounting phase.</span></p>
      <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold flex flex-row justify-center">Syntax:<img src={unMount} alt="unMount" className="px-4" /></p>
      <div className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold flex flex-row justify-center py-4"><p>Example :</p><img src={unMountex} alt="unMount" className="px-4" /></div>
      <div className="flex flex-row justify-center">
      <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold">Output:</p>
        <p className="text-[20px] text-[#BF3325] font-serif font-bold mt-10"> Hi I am rendering after that removingTime out :<span className="text-[20px] text-[#6A1B4D] font-bold px-4">{count}</span>  </p>
      </div>
    </div>
  );
}
