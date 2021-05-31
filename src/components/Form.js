import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      language: "Angular",
    };
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleLanguage = (event) => {
    this.setState({ language: event.target.value });
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.username} ${this.state.comments} ${this.state.language}`
    );
    // to prevent the auto refresh page
    event.preventDefault();
  };
  render() {
    const { username, comments, language } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type='text'
            // value={this.state.username}
            value={username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            type='text'
            // value={this.state.comments}
            value={comments}
            onChange={this.handleComments}></textarea>
        </div>

        <div>
          <label>Language</label>
          <select value={language} onChange={this.handleLanguage}>
            <option value='Angular'>Angular</option>
            <option value='React'>React</option>
            <option value='Vue'>Vue</option>
          </select>
        </div>

        <button type='submit'>Submit</button>
      </form>
    );
  }
}
export default Form;
