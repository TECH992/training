import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {
          let data = {
                    "included": [
                              {
                                        "type": "people",
                                        "id": "42",
                                        "attributes": {
                                                  "name": "John",
                                                  "age": 80,
                                                  "gender": "male"
                                        }
                              }
                    ]
          }

        
          return (
                    <div>
                              <div className='bg-[#0D0D0D] w-full h-16' >
                                        <div className='flex flex-row justify-between'>
                                                  <ul className='text-16 cursor-pointer text-white font-bold flex flex-row justify-end px-8 pt-6'>
                                                            <NavLink to="/" style={({ isActive }) => ({
                                                                      color: isActive ? "#E21717" : "",
                                                                      textDecoration: isActive?'underline':""
                                                            })} state={data}>
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                                Home
                                                                      </li>
                                                            </NavLink>
                                                            <Link to="/contact" state={"occupation"}>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                Contact
                                                                      </li>
                                                            </Link>
                                                            <Link to="/about">
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                                About
                                                                      </li>
                                                            </Link>
                                                            <Link to="/hooksEffect">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                hooksEffect
                                                                      </li>
                                                            </Link>
                                                            <Link to="/hooksReduce">
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                                hooksReduce
                                                                      </li>
                                                            </Link>
                                                            <Link to="/StateProps">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                StateProps
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksRef1">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                HooksRef1
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksRef">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                HooksRef
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksRef2">
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                                HooksRef2
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksRef3">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                HooksRef3
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksRef4">
                                                                      <li className='px-4 hover:text-[#35BDD0]'>
                                                                                HooksRef4
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Counter">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                Counter
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Button">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                Button
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Todo">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                Todo
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Data">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                Data
                                                                      </li>
                                                            </Link>
                                                            <Link to="/HooksMemo">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                HooksMemo
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Mount">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                Mount
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Unmount">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                Unmount
                                                                      </li>
                                                            </Link>
                                                            <Link to="/Update">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                Update
                                                                      </li>
                                                            </Link>
                                                            <Link to="/reg">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                Registration
                                                                      </li>
                                                            </Link>
                                                            <Link onClick={() => alert("please come from registration page, I can't find your details and the page may break.")}>
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                Profile
                                                                      </li>
                                                            </Link>

                                                            {/* <Link to="/Callback">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                HooksCallback
                                                                      </li>
                                                            </Link>
                                                            <Link to="/MultipleStateIntoReducer">
                                                                      <li className='px-2 hover:text-[#35BDD0]'>
                                                                                MultipleStateIntoReducer
                                                                      </li>
                                                            </Link> */}
                                                  </ul>
                                        </div>
                              </div>
                    </div>
          );
}

export default NavBar;
