import React, { useState, useEffect } from 'react'

export const HooksEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(count + 1)

  }, [])
  return (
    <div>{count}</div>
  )
}
