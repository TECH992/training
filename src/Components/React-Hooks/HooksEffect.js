import React, { useState, useEffect } from 'react'

export const HooksEffect = ({apiData,data}) => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(count + 1)

  }, [])
  return (
    <div>{data}</div>
  )
}
