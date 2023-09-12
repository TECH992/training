import React, { useState, useCallback, useMemo } from 'react'
import Child from './Child'
import callbackImg from "../../../image/callback.png"
import callbacksyntax from "../../../image/callbackSyntax.png"

const HooksMemo = (props) => {
  const [value, setValue] = useState()
  const [add, setAdd] = useState([])

  const [state, setState] = React.useState(false);

  const handleChange = useCallback((event) => {
    let data = event.target.value
    setValue(data)
  }, [])

  const handleAddData = useCallback(() => {
    setAdd((prevState) => {
      return [...prevState, value]
    })
  }, [value])
  console.log('hiP');
  const data = useMemo(() => [add]);
  let Explanation = " when a component re-renders, every function inside of the component is recreated and therefore these functions’ references change between renders.every time reinitialize the function become the performance issue of the application.Fixing this issue useCallback got introduce."

  const statehanddler = () => {
    setState(!state);
  };

  const dataDelete = () => {
    alert("hi")
  }
  return (
    <div >
      <h1 className='text-[24px] text-[#FFFFFF] py-4 font-sans font-bold bg-[#D9D55B]' >To-Do-App using HooksCallback</h1>
      <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold">Explanation:
        <span className="text-[20px] text-[#242B2E]">{Explanation}
        </span>
      </p>
      <div className="flex flex-row justify-center mt-4">
        <img src={callbackImg} alt="callback" className='bg-[#E03B8B]' />
      </div>
      <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold flex flex-row justify-center">Syntax:
        <img src={callbacksyntax} alt="callbacksyntax" className="px-4" />
      </p>
      <div className='mt-16 flex flex-row justify-center'>
        <p className="text-[20px] text-[rgb(222,51,171)] font-sans font-bold  py-4">Example</p>
        <div>
          <h2 className='text-[24px] text-[#3DBE29] py-4 font-sans font-bold'>To-Do-App</h2>
          <button onClick={statehanddler} className='border-[4px] rounded-[50%] border-[#120E43] p-4 text-[24px] text-[#FFFFFF] font-bold bg-[#02B290] hover:bg-[#EDC126]'>Parent-render</button>
          <Child inputData={handleChange} addData={handleAddData} data={add} valueDelete={dataDelete} />
        </div>

      </div>
    </div>

  )
}

export default HooksMemo;
