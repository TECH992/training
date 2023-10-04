import React from 'react'
import { useInput } from './useInput'
import {useLoaderData} from "react-router-dom"

const Data = () => {
  const data = useLoaderData()
          const triggerCustomHooks=useInput()
  return (
            <div className='p-4'>
                      <input className='border-[4px] border-[#758283] py-4 px-4 outline-none rounded-[50px]' placeholder="write-todo.." onChange={triggerCustomHooks.inputData} />
                      <h1 className='text-[24px],text-[#000] font-bold'>Custom Hooks Data : {triggerCustomHooks.inp }</h1>  
    </div>
  )
}

export default Data
