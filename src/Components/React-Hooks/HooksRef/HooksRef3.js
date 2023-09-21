import { useRef } from 'react'
 const HooksRef3 = () => {
  //creating a ref
  const inputText = useRef()

  const focusInput = () => {
    inputText.current.focus()
  }

  return (
    <>
      <input type="text" ref={inputText} />
      <button onClick={focusInput}>Focus the Input Text</button>
    </>
  )
}

export default HooksRef3
