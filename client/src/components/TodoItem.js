import React, { useState } from 'react';
import Popup from "./Popup";

export default function TodoItem(props) {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <li> <input 
    type="checkbox" 
    checked={props.todo.completed} 
    onChange={() => props.handleChangeProps(props.todo.id)}/> 
        <button onClick={() => props.deleteTodoProps(props.todo.id)}>Delete</button>
        <button onClick={() => setVisibility(!visibility)}>Expand</button>
        {props.todo.title}
        <Popup 
          onClose={popupCloseHandler}
          show={visibility}
          title="Details">
        <h1>{props.todo.title}</h1>
        <h2>{props.todo.description}</h2>
        
        </Popup>
     </li>
     
     
  )
}
