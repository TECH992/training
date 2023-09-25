import React from 'react'
import { Outlet } from 'react-router-dom'

const ContactChild2 = () => {
          return (
                    <div>
                              <div className="text-lg text-[#000] font-bold">ContactChild2</div>
                              <Outlet/>
            </div>
   
  )
}

export default ContactChild2