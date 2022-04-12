import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoContainer from "./ToDoContainer";

const Board = (props) => {
    const name = props.name;
    
    const containerStorage = localStorage.getItem("todoContainers-"+name);
    const [todoContainers, setTodoContainers] = useState(JSON.parse(containerStorage) || []);

    const [newName, setNewName] = useState("")

    const onChange = (e) => {
        e.preventDefault();
        setNewName(e.target.value)
    }

    const addTodoContainer = (e) => {
        e.preventDefault();
        const newTodoContainer = {
            id: uuidv4(),
            title: newName,
            todos: []
        };
        console.log(newTodoContainer)
        
        todoContainers.push(newTodoContainer);
        localStorage.setItem("todoContainers-"+name, JSON.stringify(todoContainers));
        setTodoContainers(todoContainers);
    }


    return (
        <div style={{ margin: '50px' }}>
            <form>
                <input
                    type="text"
                    placeholder="Add column..."
                    name="title"
                    onChange={onChange}
                />
                <button onClick={addTodoContainer}>Submit</button>
            </form>
            <div>
                {
                    todoContainers.map(function(container){
                        console.log(container);
                        return <TodoContainer key={container} todos={container.todos}></TodoContainer>
                    })
                }
            </div>
        </div>
    )
}

export default Board;