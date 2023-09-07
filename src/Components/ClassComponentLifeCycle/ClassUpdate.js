import React, { Component } from "react";

export default class ClassUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML ="The updated count is " + this.state.count;
  }
  render() {
    return (
      <div>
        <h1>My current is {this.state.count}</h1>
        <div id="mydiv"></div>
      </div>
    );
  }
}
