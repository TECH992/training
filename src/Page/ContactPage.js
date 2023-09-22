import React from 'react'
import { useLocation } from 'react-router-dom'
const ContactPage = () => {
          const location = useLocation()
          console.log(location)

          return (
                    <div>
                              <div>

                              <h1 className='text-[32px] pt-4 flex flex-row justify-center font-bold'>Welcome to Contact Page Ram</h1>

                              </div>
                    </div>
          )
}

export default ContactPage