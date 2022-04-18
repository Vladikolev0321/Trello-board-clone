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
            <div key={board.id}><h1>{board.boardName}</h1>
            <button value={index} onClick={selectBoard}>Select</button>
            </div>
            
          ))}
        </ul>
    )
}

export default BoardsList;