import { useState } from "react"


export const useButton = () => {
          const [data,setData]=useState()

          const triggerButton = () => {
                    setData("hi")
          }
  return{ triggerButton,data}
}
