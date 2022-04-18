import React from "react";
import {useState} from "react";
function CreateBoard(props) {
    const [boardName, setBoardName] = useState("");

    const onChange = (e) => {
        setBoardName(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();  
        props.addBoard(boardName);
        console.log(boardName);
        setBoardName("");
    }

    return (
        <div>
            <h1>Please enter board name</h1>
            <form>
                <input type="text" name="nickname" placeholder="Enter board name" value={boardName} onChange={onChange}/>
                <button type="sumbit" onClick={onSubmit}> Submit </button>
            </form>
        </div>
    )
}

export default CreateBoard;