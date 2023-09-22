import React from 'react'
import { Link, NavLink } from 'react-router-dom'

 const NavBar = (props) => {


          return (
                    <div>
                              <div className='bg-[#0D0D0D] w-[100%] h-[100px]'>
                                        <div className='flex flex-row justify-between'>
                                                
                                                  <ul className='text-[16px] cursor-pointer text-[#FFFFFF] font-bold flex flex-row justify-end px-8 pt-6 '>
                                                            <NavLink to="/"    >
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                                Home
                                                                      </li>
                                                            </NavLink>
                                                            <NavLink  to="/contact" state="hi">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                contact
                                                                      </li>
                                                            </NavLink>
                                                            <Link to="/about" reloadDocument>
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                                About
                                                                      </li>
                                                            </Link>
                                                            <Link to="/hooksEffect" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      hooksEffect
                                                                      </li>
                                                            </Link>
                                                            <Link to="/hooksReduce" reloadDocument>
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                      hooksReduce
                                                                      </li>
                                                            </Link>
                                                            <Link to="/StateProps" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      StateProps
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksRef1" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                About
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksRef" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      HooksRef
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksRef2" reloadDocument>
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                      HooksRef2
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksRef3" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      HooksRef3
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksRef4" reloadDocument>
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                      HooksRef4
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Counter" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      Counter
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Button" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      Button
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Todo" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      Todo
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Data" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      Data
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksMemo" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      HooksMemo
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Mount" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      Mount
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Unmount" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      Unmount
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Update" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      Update
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Callback" reloadDocument>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      HooksCallback
                                                                      </li>
                                                            </Link>

                                                            <Link to="/MultipleStateIntoReducer" >
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                      MultipleStateIntoReducer
                                                                      </li>
                                                            </Link>
                                                          
                                                  </ul>
                                        </div>


                              </div>

                    </div>
          )
}

export default NavBar