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
            <form>
                <h2>Please enter board name</h2>
                <input type="text" name="nickname" placeholder="Enter board name" value={boardName} onChange={onChange}/>
                <input type="button" value="Submit" onClick={onSubmit}/>
            </form>
        </div>
    )
}

export default CreateBoard;