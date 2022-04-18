import React, { useState } from 'react';
import Popup from "./Popup";
import './TodoItem.css';
import { MdDeleteForever } from "react-icons/md";
import { MdOpenWith } from "react-icons/md";
function TodoItem(props) {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (

    <div>
      <div className="item-container" draggable onDragStart={e => props.onDragStart(e, {id: props.id, title: props.todo.title, description: props.todo.description, origin: props.containerIndex})}>
      <a onClick={() => props.deleteTodoProps(props.todo.id)}><MdDeleteForever style={{"backgroundColor": "red", "color":"white", "borderRadius":"4px"}} size={20}/></a>
      <a onClick={() => setVisibility(!visibility)}><MdOpenWith style={{"backgroundColor": "blue", "color":"white", "borderRadius":"4px"}} size={20}/></a>
      <div>{props.todo.title}</div>
     </div>
     <Popup 
          onClose={popupCloseHandler}
          show={visibility}
          title="Details">
        <h1>{props.todo.title}</h1>
        <h2>{props.todo.description}</h2>
        
        </Popup>
    </div>
    
     
     
  )
}

export default TodoItem;
