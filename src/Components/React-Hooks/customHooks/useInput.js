import  { useState } from 'react'

export const useInput = () => {

          const [inp, setInp] = useState()
          
          const inputData = (event) => {
                 setInp(event.target.value)  
          }
  return {inputData,inp}
}
