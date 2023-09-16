import React, { useContext } from 'react'
import { user } from "../../../App"
const Child2 = () => {
          const data = useContext(user)
          const dataValue = data && data.data.map((item, index) => {
                    return item.attributes
          })
          return (
                    <div>
                              {/* <h1 className='text-[28px] text-[#0D0D0D] font-bold'>Fetching data using useContext: {lName}</h1> */}
                              {dataValue && dataValue.map((item, index) => {
                                        return (
                                                  <div>
                                                            <h1 className='text-[28px] text-[#0D0D0D] font-bold'>Fetching data using useContext: {item.title}</h1>
                                                            <h1 className='text-[28px] text-[#0D0D0D] font-bold'>Fetching data using useContext: {item.body}</h1>
                                                            <h1 className='text-[28px] text-[#0D0D0D] font-bold'>Fetching data using useContext: {item.created}</h1>
                                                            <h1 className='text-[28px] text-[#0D0D0D] font-bold'>Fetching data using useContext: {item.updated}</h1>

                                                  </div>
                                        )


                              })}
                    </div>
          )
}

export default Child2