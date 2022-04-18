import React, { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import TodoContainer from "./ToDoContainer";

const Board = (props) => {
    const name = props.name;
    const [newTable, setNewTable] = useState("");
    
    //const containerStorage = localStorage.getItem("todoContainers-"+name);
    let todoContainers = props.boardCtx.boards[props.boardIndex].columns;

    
    //const [newName, setNewName] = useState("")

    const onChange = (e) => {
        e.preventDefault();
        setNewTable(e.target.value);
    };

    const onSubmit = (e) => {

        e.preventDefault();  
        console.log(props.boardCtx.boards[props.boardIndex].boardName);
        props.addTodoContainer(props.boardCtx.boards[props.boardIndex].boardName, newTable);

        
    }


    return (
        <div style={{ margin: '50px' }}>
            <h1> Viewing board {props.boardCtx.boards[props.boardIndex].boardName}</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Add new table..."
                    name="title"
                    value={newTable}
                    onChange={onChange}
                />
                <button>Submit</button>
            </form>
            <div>
                {
                    todoContainers.map(function(container, contIndex) {
                        console.log(container);
                        return <TodoContainer key={container.id} 
                        boardIndex={props.boardIndex} 
                        containerIndex={contIndex} 
                        boardCtx={props.boardCtx}
                        setUserData={props.setUserData} 
                       ></TodoContainer>
                    })
                }
            </div>
        </div>
    )
}

export default Board;