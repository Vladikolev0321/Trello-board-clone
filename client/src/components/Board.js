import React, { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import TodoContainer from "./ToDoContainer";

const Board = (props) => {
    const name = props.name;
    const [newTable, setNewTable] = useState("");
    const [boardCtx, setBoardCtx] = useState(props.boardCtx);
    let todoContainers = props.boardCtx.boards[props.boardIndex].columns;

    const onChange = (e) => {
        e.preventDefault();
        setNewTable(e.target.value);
    };

    const onSubmit = (e) => {

        e.preventDefault();  
        console.log(props.boardCtx.boards[props.boardIndex].boardName);
        props.addTodoContainer(props.boardCtx.boards[props.boardIndex].boardName, newTable);

        
    }

    const onDragOver = ev => {
        ev.preventDefault();
      };
    
    const onDragStart = (ev, name) => {
      
        ev.dataTransfer.setData("id", JSON.stringify(name));
      };
    
    const onDrop = (ev, cat) => {
        const data = JSON.parse(ev.dataTransfer.getData("id"));


        if(cat === data.origin) return;

        let transferedItem = {
          id: data.id,
          title: data.title,
          description: data.description,
        }

        props.boardCtx.boards[props.boardIndex].columns[cat].todos.push(transferedItem);
        props.boardCtx.boards[props.boardIndex].columns[data.origin].todos = props.boardCtx.boards[props.boardIndex].columns[data.origin].todos.filter(todo => {
          return todo.id !== data.id;
        });

        props.updateUserData(props.boardCtx);

      };
    
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
                        className="drop-area"
                        onDragOver={e => onDragOver(e)}
                        onDrop={onDrop}
                        onDragStart={onDragStart}
                        updateUserData={props.updateUserData}>
                        </TodoContainer>
                    })
                }
            </div>
        </div>
    )
}

export default Board;