import React, { useRef } from 'react'

export default function HooksRef1() {
          const counter = useRef(0)
          counter.current = counter.current + 1
          return <h1>{`Number of times the component renders:  ${counter} `}</h1>
}
