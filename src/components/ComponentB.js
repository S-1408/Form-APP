import React, { Component } from "react";
import UpdatedComponent from "./WithComponent";

class ComponentB extends Component {
  render() {
    return (
      <div>
        <h5> hello! {this.props.name} I am component B.((Ex of HOC))</h5>
      </div>
    );
  }
}
export default UpdatedComponent(ComponentB);
