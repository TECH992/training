import React from 'react'
import { useParams } from 'react-router-dom'

const ChildId = () => {
          const {id} =useParams()
  return (
            <div className="text-lg text-[#000] font-bold">ChildId:{id }</div>
  )
}

export default ChildId