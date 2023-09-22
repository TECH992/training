import React from 'react'
import { logger } from "../logger"
const About = () => {
          logger("component re-render")
          return (
                    <div>

                              <h1 className='text-[32px] pt-4 flex flex-row justify-center font-bold'>Welcome to About Page Ram</h1>

                    </div>
          )
}

export default About