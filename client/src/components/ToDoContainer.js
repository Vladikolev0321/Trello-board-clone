import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todos")) || []
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


    this.state.todos = [
      ...this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    ];
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    this.setState(this.state.todos);
    
  };

  addTodoItem = prop => {
    const newTodo = {
      id: uuidv4(),
      title: prop["title"],
      description: prop["description"],
      completed: false
    };
    
    this.state.todos = [...this.state.todos, newTodo];
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    this.setState(this.state.todos);
    
    
  };


  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList 
        todos={this.state.todos} 
        handleChangeProps={this.handleChange}
        deleteTodoProps={this.delTodo}/>
      </div>

    )
  }
}
export default TodoContainer