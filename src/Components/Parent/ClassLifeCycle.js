import React, { Component } from 'react'
//import ClassMount from '../ClassComponentLifeCycle/ClassMount'
import ClassUpdate from '../ClassComponentLifeCycle/ClassUpdate'

export default class ClassLifeCycle extends Component {
  render() {
    return (
      <div>
          {/* <ClassMount/> */}
          <ClassUpdate/>
      </div>
    )
  }
}
