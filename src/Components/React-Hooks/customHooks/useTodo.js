import { useState } from 'react'

export const useTodo = () => {
          const [input, setInput] = useState()
          const [add,setAdd]=useState([])
         
      const inputChange = (e) => {
                
                setInput(e.target.value)    
          }
          const addData = () => {
                    setAdd((prev) => {
                       return[...prev,input]    
                 })   
          }

          return {
            inputChange,
            addData,
            add
          };
          
}
