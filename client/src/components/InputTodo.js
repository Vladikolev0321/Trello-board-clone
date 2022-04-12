import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: "",
    description: ""
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state);
    this.setState({
        title: "",
        description: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add note title"
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <input
          type="text"
          placeholder="Add note details"
          value={this.state.description}
          name="description"
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo