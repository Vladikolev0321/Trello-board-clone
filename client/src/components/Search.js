import React, { Component } from "react"

class Search extends Component {
  state = {
    filter: "",
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
        filter: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search for specific item"
          value={this.state.title}
          name="title"
          className="new-item-input"
          onChange={this.onChange}
        />
        <input
          type="text"
          placeholder="Add note details"
          value={this.state.description}
          name="description"
          className="new-item-input"
          onChange={this.onChange}
        />
        <button className="submit-new-item">Submit</button>
      </form>
    )
  }
}
export default Search