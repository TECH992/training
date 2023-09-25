import React from 'react'
import { useParams } from 'react-router-dom'

const ParamsData = () => {
          const {id}=useParams()
  return (
            <div>ParamsData:{id }</div>
  )
}

export default ParamsData