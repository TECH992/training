import React from 'react'
import Paragraph from '../components/Typogaphy/Paragraph'
import Heading from '../components/Typogaphy/Heading'
import Button from '../components/Button/Button'

export default function HomePage({name,age,dob,buttonName}) {

    const clickAlert=()=>{
        alert("hi")
    }
//console.log(props.name)
  return (
    <div className="text-[#fff]">
        <Paragraph className="text-[24px] text-[#35BDD0]" paragraphText={name}/>
        <Heading className="text-[48px] text-[#BF3325]" headingText={age}/>
        <Heading className="text-[48px] text-[#BF3325]" headingText={dob}/>
        <Button buttonText={buttonName} click={clickAlert}/>
    </div>
  )
}




