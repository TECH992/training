import React from 'react'
import { useRef } from 'react'
export const HooksRef2 = () => {
          const countClick = useRef(0)
          const handleClick = () => {
                    countClick.current++
                    console.log(` Number of times the button is clicked: ${countClick.current}`)
          }

          console.log('Component is rendered')
          return <button onClick={handleClick}>Click the button!</button>
}
