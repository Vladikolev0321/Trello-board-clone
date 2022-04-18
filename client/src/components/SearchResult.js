import React, { useState } from 'react';
import Popup from "./Popup";
import './SearchResult.css';



export default function SearchResult(props) {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div className="item-container" onClick={() => setVisibility(!visibility)}>
      <div>{props.todo.title}</div>
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
