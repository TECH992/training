import React from 'react'
import Button from './Button'
import Data from './Data'
import Input from './Input'
export default function Todo(props) {
  const [inp, setInp] = React.useState();
  const [add, setAdd] = React.useState([]);
  const inputData = (e) => {
    setInp(e.target.value);
  };
  const addData = () => {
    setAdd((prev) => {
      return [...prev, inp];
    });
  };
  return (
    <div className="flex flex-row justify-center">
      <div>
        <h2 className='text-[24px] text-[#3DBE29] py-4 font-sans font-bold'>To-Do-App</h2>
        <Input className='border-[4px] border-[#32c1cb] py-4 px-4 outline-none rounded-[50px]' placeholder="write-todo.." changeValue={inputData} /><br />
        <Button handleSubmit={addData} name="addData" />

        <Data dataArr={add} />
      </div>
    </div>
  )
}
