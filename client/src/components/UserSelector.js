import React, { Component } from "react"

class UserSelector extends Component {
  state = {
    username: this.props.currentUsername || "",
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.username);
    this.props.changeUsername(this.state.username);
  };

  render() {
    return (
    <div><h2>Current user</h2>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={this.state.username}
          name="username"
          onChange={this.onChange}
        />
        <button>Change</button>
      </form>
        </div>
    )
  }
}
export default UserSelector