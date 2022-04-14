import React from "react";
import {useState} from "react";

function BoardsList(props) {

    console.log(props)

    return (
        <ul>
          {props.boards.map(board => (
            <div key={board.id} >{board.title}</div>
          ))}
        </ul>
    )
}

export default BoardsList;