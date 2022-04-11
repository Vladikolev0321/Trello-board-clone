import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoContainer from "./ToDoContainer";

const Board = (props) => {
    const name = props.name;
    const [todoContainers, setTodoContainers] = useState(JSON.parse(localStorage.getItem("todoContainers-"+name)) || []);


    const addTodoContainer = (e, arg) => {
        e.preventDefault();
        const newTodoContainer = {
            id: uuidv4(),
            title: e.target.value,
            todos: []
        };
        
        let todoContainersTemp = [...todoContainers, newTodoContainer];
        localStorage.setItem("todoContainers-"+name, JSON.stringify());
        setTodoContainers(todoContainersTemp);
    }


    return (
        <div style={{ margin: '50px' }}>
            <form onSubmit={addTodoContainer}>
                <input
                    type="text"
                    placeholder="Add column..."
                    name="title"
                />
                <button>Submit</button>
            </form>
            <div>
                {
                    todoContainers.map(function(container){
                        return <TodoContainer props={container}></TodoContainer>
                    })
                }
            </div>
        </div>
    )
}


export default Board;