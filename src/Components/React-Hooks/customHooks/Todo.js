import React from 'react'
import { useTodo } from './useTodo'

const Todo = () => {
  const AddDataInTodo = useTodo()
  let todoData = AddDataInTodo.add
  return (
    <div>
      <h1 className="text-[#fff] text-[24px] font-bold bg-[#171ae2] py-2">Custom-Hooks</h1>
      <div>
        <div className='flex flex-row justify-center'>
          <h2 className='text-[24px] text-[#3DBE29] py-4 font-sans font-bold'>To-Do-App</h2>
        </div>

        <div className='flex flex-row justify-center'>
          <input className='border-[4px] border-[#758283] py-4 px-4 outline-none rounded-[50px]' placeholder="write-todo.." onChange={AddDataInTodo.inputChange} value={AddDataInTodo.input} />
          <button type="" className="text-[#fff] text-[24px] font-bold rounded-[200px] bg-[#E21717] ml-4 px-4 pb-2" onClick={AddDataInTodo.addData}>+</button>
        </div>


        <ul className='bg-[#DDD101]  mt-10'>

          {todoData && todoData.map((item, index) => {
            return (
              <div className=" flex flex-row justify-center">
                <li className='text-[24px] text-[#3DBE29] py-4 font-sans font-bold'>{index} : </li>
                <li className='text-[24px] text-[#3DBE29] py-4 font-sans font-bold'>{item}</li>
                <button type="" className="text-[#fff] text-[24px] font-bold rounded-[200px] bg-[#E21717] ml-4 px-4 pb-2" onClick={(e)=>AddDataInTodo.deleteData(index)}>-</button>
              </div>
            )
          })}

        </ul>

      </div>
    </div>
  )
}

export default Todo