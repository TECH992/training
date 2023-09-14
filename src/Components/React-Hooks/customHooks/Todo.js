import React from 'react'
import { useTodo } from './useTodo'

const Todo = () => {
 const AddDataInTodo= useTodo()
 console.log(AddDataInTodo.add)
  return (
    <div>
      <h1 className="text-[#fff] text-[24px] font-bold bg-[#171ae2] py-2">Custom-Hooks</h1>
    <div>
      <h2 className='text-[24px] text-[#3DBE29] py-4 font-sans font-bold'>To-Do-App</h2> 
      <input className='border-[4px] border-[#758283] py-4 px-4 outline-none rounded-[50px]' placeholder="write-todo.." onChange={AddDataInTodo.inputChange} />
      <button type="" className="text-[#fff] text-[24px] font-bold rounded-[200px] bg-[#E21717] ml-4 px-4 pb-2" onClick={AddDataInTodo.addData}>+</button>
    </div>
    </div>
  )
}

export default Todo