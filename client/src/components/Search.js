import React, { Component } from "react"
import Popup from "./Popup"
import SearchResult from "./SearchResult"
class Search extends Component {
  state = {
    filter: "",
    results: []
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    if(e.target.value.toLowerCase() === "") {
      this.setState({
        results: [],
        filter: e.target.value
      })
      return;
    }
    let new_results=[];
    for(let i = 0; this.props.boardCtx.boards.length > i; i++){
      for(let j = 0; this.props.boardCtx.boards[i].columns.length > j; j++){
        for(let k = 0; this.props.boardCtx.boards[i].columns[j].todos.length > k; k++){
          if(this.props.boardCtx.boards[i].columns[j].todos[k].title.toLowerCase().includes(e.target.value.toLowerCase())){
            new_results.push(this.props.boardCtx.boards[i].columns[j].todos[k]);
          }
        }
      }
    }
    this.setState({
      results: [...new_results],
      filter: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for specific item..."
          value={this.state.filter}
          name="filter"
          className="new-item-input"
          onChange={this.onChange}
        />
        {this.state.results.map((item, index) => (
          <SearchResult key={index} todo={item}/>  
        ))}
    </div>
    )
  }
}
export default Search