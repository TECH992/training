import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ApiData = () => {
  const data =useLoaderData()
  let latestData=data.products
  console.log(latestData)

  return (
    <div>
      <div>
        <ul>
        {latestData && latestData.map((item, index) => {
          return (
            <li>{item.brand }</li>
          )
        })}
        </ul>
      </div>
    </div>
  )
}

export default ApiData