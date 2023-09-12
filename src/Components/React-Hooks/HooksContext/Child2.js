import React, { useContext } from 'react'
import { lastName } from "../../../App"
const Child2 = () => {
          const lName = useContext(lastName)
          //const first = useContext(second)
          return (
                    <div>
                              <h1 className='text-[28px] text-[#0D0D0D] font-bold'>Fetching data using useContext: {lName}</h1>
                    </div>
          )
}

export default Child2