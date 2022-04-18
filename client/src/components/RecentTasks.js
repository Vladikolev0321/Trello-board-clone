import React, { useEffect, useState } from "react";
import TodosList from "./TodosList";

export default function RecentTasks(props) {

    const handleChange = (id) => {
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

    return (
        <div>
            <div>
                <h2>Recent Tasks</h2>
                <span>
                </span>
                <div>
                <ul>
                    <TodosList 
                    todos={props.userData.tasks} 
                    handleChangeProps={handleChange}/>
                </ul>
                </div>
            </div>
        </div>
    );
}