//import { useState } from "react"
import React from "react";
import Paragraph from "../components/Typogaphy/Paragraph";
import Button from '../components/Button/Button'
function Counter() {
           const [count, setCount] = React.useState(3);
           const [dec, setDec] = React.useState(0)

           const increment = () => {
                      setCount(count + 1)
           }
           const decerement = () => {
                      setDec(dec - 1)
           }
           return (
                      <div className="flex flex-row justify-center mt-12">
                                 <div>
                                            <Paragraph className="text-[#03C6C7] text-[24px] mx-12" paragraphText={count} />
                                            <Button buttonText="increment" className="bg-[#E21717] text-[#6435d0] p-4 my-4" click={increment} />

                                            <Paragraph className="text-[#03C6C7] text-[24px] mx-12" paragraphText={dec} />
                                            <Button buttonText="increment" className="bg-[#E21717] text-[#6435d0] p-4 my-4" click={decerement} />
                                 </div>

                      </div>
           );
}

export default Counter;
