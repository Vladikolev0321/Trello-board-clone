import React, { useEffect } from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";
import './ToDoContainer.css';
class TodoContainer extends React.Component {
  state = {
    // todos: JSON.parse(localStorage.getItem("todos")) || []
    todos: this.props.boardCtx.boards[this.props.boardIndex].columns[this.props.containerIndex].todos
   };

   handleChange = (id) => {
    console.log("clicked");

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
    
  };

  delTodo = id => {
    console.log("deleted", id);


    // this.state.todos = [
    //   ...this.state.todos.filter(todo => {
    //     return todo.id !== id;
    //   })
    // ];
    
    this.state.todos = this.props.boardCtx.boards[this.props.boardIndex].columns[this.props.containerIndex].todos;
    this.state.todos = [
      ...this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    ];
    this.props.boardCtx.boards[this.props.boardIndex].columns[this.props.containerIndex].todos = this.state.todos;
    console.log(this.props.boardCtx);
    localStorage.setItem(this.props.boardCtx.username, JSON.stringify(this.props.boardCtx));
    this.setState(this.state.todos);
    
  };

  addTodoItem = prop => {
    const newTodo = {
      id: uuidv4(),
      title: prop["title"],
      description: prop["description"],
      completed: false
    };
    console.log(this.props.boardCtx.username);
    this.state.todos = this.props.boardCtx.boards[this.props.boardIndex].columns[this.props.containerIndex].todos;
    this.state.todos = [...this.state.todos, newTodo];
    this.props.boardCtx.boards[this.props.boardIndex].columns[this.props.containerIndex].todos = this.state.todos;
    console.log(this.props.boardCtx);
    localStorage.setItem(this.props.boardCtx.username, JSON.stringify(this.props.boardCtx));
    this.setState(this.state.todos);
    
    
  };


  render() {

    return (
      <div className="drop-area"
      onDragOver={e => this.props.onDragOver(e)}
      onDrop={e => this.props.onDrop(e, this.props.containerIndex)}
              >
        <h1>{this.props.boardCtx.boards[this.props.boardIndex].columns[this.props.containerIndex].title}</h1>
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
        todos={this.props.boardCtx.boards[this.props.boardIndex].columns[this.props.containerIndex].todos} 
        handleChangeProps={this.handleChange}
        deleteTodoProps={this.delTodo}
        onDragStart={this.props.onDragStart}
        containerIndex={this.props.containerIndex}
            />
      </div>


    )
  }
}
export default TodoContainer