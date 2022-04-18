import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";

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
    
    this.state.todos = this.props.boardCtx.boards[this.props.boardIndex].columns[this.props.containerIndex].todos;
    this.state.todos = [
      ...this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    ];
    this.props.boardCtx.boards[this.props.boardIndex].columns[this.props.containerIndex].todos = this.state.todos;
    console.log(this.props.boardCtx);

    this.props.boardCtx.tasks = this.props.boardCtx.tasks.filter(task => task.id !== id);

    localStorage.setItem(this.props.boardCtx.username, JSON.stringify(this.props.boardCtx));
    this.props.setUserData(this.props.boardCtx);

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
    
    this.props.boardCtx.tasks.push(newTodo);

    this.props.setUserData(this.props.boardCtx);

    console.log(this.props.boardCtx);
    localStorage.setItem(this.props.boardCtx.username, JSON.stringify(this.props.boardCtx));
    this.setState(this.state.todos);
    
    
  };


  render() {

    return (
      <div>
        <Header title={this.props.boardCtx.boards[this.props.boardIndex].columns[this.props.containerIndex].title} />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList 
        todos={this.props.boardCtx.boards[this.props.boardIndex].columns[this.props.containerIndex].todos} 
        handleChangeProps={this.handleChange}
        deleteTodoProps={this.delTodo}/>
      </div>

    )
  }
}
export default TodoContainer