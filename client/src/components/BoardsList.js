import React from "react";
import {useState} from "react";

function BoardsList(props) {

    console.log(props)
    const selectBoard = (e) => {
      props.selectBoard(e.target.value);
    }
//onClick={props.selectBoard(board.boardName)}
    return (
        <ul>
          {props.boardCtx.boards.map((board, index) => (
            <div key={board.id}><div>{board.boardName}</div>
            <button value={index} onClick={selectBoard}>Select</button>
      
              </div>
            
          ))}
        </ul>
    )
}

export default BoardsList;