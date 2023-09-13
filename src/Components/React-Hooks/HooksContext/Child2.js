import React, { useContext } from 'react'
import { lastName, user } from "../../../App"
const Child2 = () => {
          // const lName = useContext(lastName)
          const data = useContext(user)
          //console.log('', data);
          const dataValue = data && data.data.map((item, index) => {
                    return item.attributes
          })
          //console.log(dataValue)
          //const first = useContext(second)
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