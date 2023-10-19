import React from 'react'
import Paragraph from '../components/Typogaphy/Paragraph'
import Heading from '../components/Typogaphy/Heading'
export default function Setting(props) {
  return (
    <div className="text-[#fff]">
    <Paragraph className="text-[24px] text-[#35BDD0]" paragraphText={props.name}/>
    <Heading className="text-[48px] text-[#BF3325]" headingText={props.name}/>
</div>
  )
}
