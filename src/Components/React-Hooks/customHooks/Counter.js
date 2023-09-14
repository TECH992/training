import React from 'react'
import useIncrement from './useIncrement'
const Counter = () => {
      let counter = useIncrement(0)
      console.log(counter.increment)
      
      return (
            <div>
                  <h1 className="text-[#fff] text-[24px] font-bold bg-[#171ae2] py-2">Custom-Hooks</h1>
                  <div className='pt-10'>
                        <h1 className="text-[#171ae2] text-[24px] font-bold  py-2">Counter App</h1>
                        <h2 className="text-[#000] text-[24px] font-bold">{counter.count}</h2>
                        <button type="" className="text-[#fff] text-[24px] font-bold rounded-[200px] bg-[#E21717] px-4 pb-2" onClick={counter.increment}>+</button>
                        <button type="" className="text-[#fff] text-[24px] font-bold rounded-[200px] bg-[#E21717] px-4 pb-2" onClick={counter.decrement}>-</button>
                        <button type="" className="text-[#fff] text-[24px] font-bold rounded-[200px] bg-[#E21717] px-4 pb-2" onClick={counter.reset}>reset</button>
                  </div>
            </div>

      )
}

export default Counter