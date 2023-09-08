import React, { useState } from 'react'

export const MultipleState = () => {
          const [val, setVal] = useState()
          const [red, setRed] = useState()
          const [blue, setBlue] = useState()
          const [green, setGreen] = useState()
          const [yellow, setYellow] = useState()
          const [sky, setSky] = useState()
          const handleChangeColor = (data) => {
                    setVal(data)
                    if (data === "red") {
                              setRed("#E21717")
                    } else if (data === "blue") {
                              setBlue("#1B98F5")
                    }
                    else if (data === "green") {
                              setGreen("#3DBE29")
                    }
                    else if (data === "yellow") {
                              setYellow("#EDC126")
                    }
                    else if (data === "sky") {
                              setSky("#03C6C7")
                    }
          }
          let color = val === "red" ? red : val === "blue" ? blue : val === "green" ? green : val === "yellow" ? yellow : val === "sky" ? sky : "#FFFFFF";
          return (
                    <div>
                              <h1 className='text-[24px] text-[#FFFFFF] py-4 font-sans font-bold' style={{ backgroundColor: `${color}` }}>Changing color with Multiple useState Hooks</h1>
                              <div className="flex flex-row justify-center">
                                        <div className=" w-[30%]  border-[4px] border-[#FF6666] mt-8 p-32" style={{ backgroundColor: `${color}` }}></div>
                              </div>
                              <div className="flex flex-row justify-center mt-8">
                                        <button className="w-[50px] bg-[#E21717] text-[13px] text-[#fff]" onClick={() => handleChangeColor("red")}>Red</button>
                                        <button className="w-[50px] bg-[#1B98F5] text-[13px] text-[#fff]" onClick={() => handleChangeColor("blue")}>Blue</button>
                                        <button className="w-[50px] bg-[#3DBE29] text-[13px] text-[#fff]" onClick={() => handleChangeColor("green")}>Green</button>
                                        <button className="w-[50px] bg-[#EDC126] text-[13px] text-[#fff]" onClick={() => handleChangeColor("yellow")}>Yellow</button>
                                        <button className="w-[50px] bg-[#03C6C7] text-[13px] text-[#fff]" onClick={() => handleChangeColor("sky")}>Sky</button>
                              </div>

                    </div>
          )
}
