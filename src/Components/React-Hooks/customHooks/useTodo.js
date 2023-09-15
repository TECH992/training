import { useState } from 'react'

export const useTodo = () => {
  const [input, setInput] = useState()
  const [add, setAdd] = useState([])

  const inputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }
  const addData = (e) => {
    e.preventDefault();
    if (input != "") {
      setAdd((prev) => {
        return [...prev, input]
      })
    }
    setInput("")

  }
  const deleteData = (data) => {
    let dataVal = add.filter((item, index) => index != data)
    setAdd(dataVal)
  }
  return {
    inputChange,
    addData,
    add,
    input,
    deleteData
  };

}
