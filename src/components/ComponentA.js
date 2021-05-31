import React, { Component } from "react";
import UpdatedComponent from "./WithComponent";

class ComponentA extends Component {
  render() {
    return (
      <div>
        <h5>Hii! {this.props.name} I am component A (Ex of HOC)</h5>
      </div>
    );
  }
}
export default UpdatedComponent(ComponentA);
