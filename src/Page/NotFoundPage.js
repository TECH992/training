import React from 'react'
import {Navigate} from 'react-router-dom'
export const NotFoundPage = () => {
          return (
                    <div>
                              {/* <h1 className='text-[24px] text-[#E21717] font-mono font-bold flex flex-row justify-center'>Sorry This page is not available</h1> */}
                              <Navigate to="/contact"/>
                    </div>
          )
}
