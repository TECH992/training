import React from 'react'
import { NavBar } from '../Components/NavBar/NavBar'

const HomePage = (props) => {
console.log(props)
          return (
                    <div>
                              <NavBar />
                              <h1 className='text-[32px] pt-4 flex flex-row justify-center font-bold'>Welcome to Home Page Ram</h1>
                    </div>
          )
}

export default HomePage