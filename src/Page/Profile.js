import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Profile = () => {
          const location = useLocation()
          console.log(location)
          const navigate= useNavigate()
          const { name, email, password } = location.state.formData
          // let names = location.state.formData.name
          // let Emails = location.state.formData.email
          // let Passwords= location.state.formData.password
          const logOut = () => {
                    navigate("/reg")
          }
          return (
                    <div className='center mt-12'>
                              <div className='border-[2px] border-[#03C6C7] p-12'>
                                        <h2 className='text-[#03C6C7] text-[24px] font-bold'>Welcome to your Profile Page</h2>
                                        <p className='text-[#000] text-[24px] font-bold'>Name : {name}</p>
                                        <p className='text-[#000] text-[24px] font-bold'>Email : {email}</p>
                                        <p className='text-[#000] text-[24px] font-bold'>Password : {password}</p>
                                        <button
                                                  className='w-[345px] md:w-[645px] h-[52px] shrink-0 rounded-[15px] bg-[#1BC2B8] text-[#2F2E41] text-center text-[16px] md:text-[24px] not-italic font-[800] tracking-[0.96px] leading-normal mt-10'
                                                  onClick={logOut}
                                        >
                                                  Log-Out
                                        </button>
                              </div>

                    </div>
          )
}



export default Profile