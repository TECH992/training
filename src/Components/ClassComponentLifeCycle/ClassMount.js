import React, { Component } from "react";

export default class ClassMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
   
    
    };
  }
  componentDidMount() {
    console.log("hi")
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>After Mounting: {this.state.count}</h1>
      </div>
    );
  }
}
