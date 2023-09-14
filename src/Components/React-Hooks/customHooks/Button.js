import React from 'react'
import { useButton } from './useButton'

const Button = () => {
          const triggeringAlertUsingCustomHooks=useButton()
          return (
                    <div className='pt-10'>
                              <h1 className='text-[24px],text-[#000] font-bold'>{triggeringAlertUsingCustomHooks.data }</h1>
                              <button className='bg-[#03C6C7] text-[16px] p-4 text-[#000] rounded-[200px] font-bold' onClick={triggeringAlertUsingCustomHooks.triggerButton}> Alert</button>
                    </div>
          )
}

export default Button