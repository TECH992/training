import React from 'react'

export default function Counter() {
  const [data, setData] = React.useState(0);


  const inc = () => {
    setData(data + 1);
  };     //console.log(props)
  return (
    <div className="flex flex-row justify-center">
      <div>
        <h2 className='text-[24px] text-[#3DBE29] py-4 px-12 font-sans font-bold'>{data}</h2>
        <button className="text-[#fff] text-[24px] font-bold rounded-[200px] bg-[#E21717] ml-4 px-4 pb-2 mt-4" onClick={inc}>Incr.</button>
      </div>
    </div>
  )
}
