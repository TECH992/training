import React from "react";
import { useState, useEffect } from "react";
import Mountex from "../../image/Mountex.png"
import Mounts from "../../image/Mount.png"

export default function Mount() {  
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, []);




     return (
    <div>
           <h1 className="bg-[#FF6666] text-[28px] text-[#fff] font-bold">Functional Mount LifeCycle Method</h1>
      <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold">Explanation:<span className="text-[20px] text-[#242B2E]">what componentDidMount is doing in class based component same thing doing useEffect with empty dependency is doing. componentDidMount getting called just after render function or component is getting mounted into dom. same way useEffect with empty dependency get called just after return function or component is getting mounted into dom. mostly we are using this mount method to call api.</span></p>
      <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold flex flex-row justify-center">Syntax:<img src={Mounts} alt="Mount" className="px-4" /></p>
      <div className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold flex flex-row justify-center py-4"><p>Example :</p><img src={Mountex} alt="unMount" className="px-4" /></div>
      <div className="text-[20px] text-[#BF3325] font-serif font-bold mt-10 flex flex-row justify-center">Output:<p className="px-4">After Mount :<span className="text-[20px] text-[#6A1B4D] font-bold px-4">{count}</span></p></div>
    </div>
  );
}
