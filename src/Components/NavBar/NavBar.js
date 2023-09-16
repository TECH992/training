import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
          return (
                    <div>
                              <div className='bg-[#0D0D0D] w-[100%] h-[100px]'>
                                        <div className='flex flex-row justify-between'>
                                                  <h1 className="text-[32px] text-[#FFFFFF] font-bold px-4 pt-4">React-Router</h1>
                                                  <ul className='text-[16px] cursor-pointer text-[#FFFFFF] font-bold flex flex-row justify-end px-8 pt-6 '>
                                                            <Link to="/">
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                                Home
                                                                      </li>
                                                            </Link>
                                                            <Link to="/contact">
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                                contact
                                                                      </li>
                                                            </Link>
                                                            <Link to="/about" >
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                                About
                                                                      </li>
                                                            </Link>
                                                  </ul>
                                        </div>


                              </div>

                    </div>
          )
}
