import React from 'react'
import { firstName } from "../../../App"
const Child1 = () => {
         
          return (
                    <div>
                              <firstName.Consumer>
                                        {(fName) => {
                                                  return (
                                                            <div>
                                                                      <h1 className='text-[24px] text-[#FFFFFF] py-4 font-sans font-bold bg-[#D9D55B]'>Passing data using Context Hooks</h1>
                                                                      <h1 className='text-[28px] text-[#0D0D0D] font-bold'>Fetching data using Context: {fName}</h1>
                                                            </div>

                                                  )
                                        }}
                              </firstName.Consumer>
                    </div>
          )
}

export default Child1