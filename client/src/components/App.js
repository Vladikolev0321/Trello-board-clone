import React from "react";
import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import CreateBoard from "./CreateBoard";
import BoardsList from "./BoardsList";

function App() {
    const [username, setUsername] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [userData, setUserData] = useState({});

    const onChange = (e) => {
        setUsername(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        
        let state = {
            boards: [],
            username: username
        };
        //check if username is in local storage
        if (localStorage.getItem(username) === null) {
            //if not, add it
            localStorage.setItem(username, JSON.stringify(state));  
            setUserData(state);
            return;
        }
        state = JSON.parse(localStorage.getItem(username));  
        console.log(state)
        setUserData(state);
        

        //window.location.reload();
    }

    const addBoard = (boardName) => {
        const newBoard = {
            id: uuidv4(),
            title: boardName,
            columns: []
          };
          console.log(newBoard);
          userData.boards = [...userData.boards, newBoard];
          localStorage.setItem(username, JSON.stringify(userData));
          setUserData(userData);
          setUserData({
            ...userData,
            boards: userData.boards,
            
          });
    }

    if(submitted === false) {
    return (
        <div>
            <form>
                <h2>Please enter your username</h2>
                <input type="text" name="nickname" placeholder="Enter your username" value={username} onChange={onChange}/>
                <input type="button" value="Submit" onClick={onSubmit}/>
            </form>
        </div>
    )
    } else {
        return (<div><CreateBoard addBoard={addBoard} />
                <BoardsList boards={userData.boards}/>
            </div>)
    }
}

export default App;