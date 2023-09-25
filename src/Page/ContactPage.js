import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
const ContactPage = (props) => {
          const location = useLocation()
          
          console.log(location)
        

          return (
                    <div>
                              <div >
                                        <h1 className='text-[32px] pt-4 flex flex-row justify-center font-bold'>Welcome to Contact Page Ram</h1>
                                        <div className="flex flex-row justify-center">
                                        <Link to="/contact/child1" className='text-[24px] text-[#000] bg-[#E21717] w-[100px] p-4'>Child1</Link>
                                                  <Link to="/contact/child2" className='text-[24px] text-[#000] bg-[#DDD101] w-[100px] p-4'>Child2</Link>
                                                 
                                        </div>
                                        <div className='flex flex-row justify-center  '>
                                        <Outlet/>
                                        </div>
                                        
                              </div>
                    </div>
          )
}

export default ContactPage