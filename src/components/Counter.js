import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });

    this.setState((prevCount) => {
      return { count: prevCount.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>Clicked{count}</button>
      </div>
    );
  }
}
export default Counter;
