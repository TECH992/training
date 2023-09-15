import { useReducer } from "react"
const reducer = (state, action) => {

          if (action.type === "red") {
                    return { color: action.color }
          } else if (action.type === "blue") {
                    return { color: action.color }
          } else if (action.type === "green") {
                    return { color: action.color }
          } else if (action.type === "yellow") {
                    return { color: action.color }
          } else if (action.type === "sky") {
                    return { color: action.color }
          }
          else {
                    return state.color
          }

}
const MultipleStateIntoReducer = () => {
          const [state, dispatch] = useReducer(reducer, { color: "#ffff" });
         
          const handleChangeColor = (data) => {

                    if (data === "red") {
                              dispatch({ type: "red", color: "#E21717" });
                    } else if (data === "blue") {
                              dispatch({ type: "blue", color: "#1B98F5" });
                    }
                    else if (data === "green") {
                              dispatch({ type: "green", color: "#3DBE29" });
                    }
                    else if (data === "yellow") {
                              dispatch({ type: "yellow", color: "#EDC126" });
                    }
                    else if (data === "sky") {
                              dispatch({ type: "sky", color: "#03C6C7" });
                    }
          }

          return (
                    <div>
                              <h1 className='text-[24px] text-[#FFFFFF] py-4 font-sans font-bold' style={{ backgroundColor: `${state.color}` }}>Changing color with useReducer Hooks</h1>
                              <div className="flex flex-row justify-center">
                                        <div className=" w-[30%]  border-[4px] border-[#FF6666] mt-8 p-32" style={{ backgroundColor: `${state.color}` }}></div>
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

export default MultipleStateIntoReducer