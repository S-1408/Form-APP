import React, { Component } from "react";
import axios from "axios";
import User from "./User";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({
          lists: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { lists } = this.state;
    return (
      <div>
        List of User
        {lists.length
          ? lists.map((list, index) => (
              <div key={list.id}>
                {" "}
                {index} -{list.title}
              </div>
            ))
          : null}
      </div>
    );
  }
}
export default UserList;
