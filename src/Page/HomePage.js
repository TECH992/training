import React from 'react'
import { useLocation } from 'react-router-dom'


const HomePage = () => {
          
const location=useLocation()
console.log(location)
          return (
                    <div>
                          
                              <h1 className='text-[32px] pt-4 flex flex-row justify-center font-bold'>Welcome to Home Page Ram</h1>
                    </div>
          )
}

export default HomePage