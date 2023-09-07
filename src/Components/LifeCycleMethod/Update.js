import React from "react";
import { useState, useEffect } from "react";
import Updates from "../../image/Update.png"
import UpdatesEx from "../../image/UpdateEx.png"
export default function Update() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  ///

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <div>
      <h1 className="bg-[#FF6666] text-[28px] text-[#fff] font-bold">Functional Update LifeCycle Method</h1>
      <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold">Explanation:<span className="text-[20px] text-[#242B2E]"> what componentdidUpdate is doing in class based component same thing doing useEffect is doing with dependency array. componentDidUpdate we are using to update data  after Ui is getting render.</span></p>
      <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold flex flex-row justify-center">Syntax:<img src={Updates} alt="Mount" className="px-4" /></p>
      <div className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold flex flex-row justify-center py-4"><p>Example :</p><img src={UpdatesEx} alt="unMount" className="px-4" /></div>
      <div className="flex flex-row justify-center">
        <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold">  Output:</p>
    
        <div >
       
          <p className="text-[20px] text-[#6A1B4D] font-sans font-bold">Count: {count}</p>
          <button onClick={() => setCount((c) => c + 1)} className="border-[2px] border-[#ff6666] p-4 bg-[#03C6C7]">+</button>
          <p className="text-[20px] text-[#6A1B4D] font-sans font-bold">Calculation: {calculation}</p>
        </div>
      </div>

    </div>
  );
}
