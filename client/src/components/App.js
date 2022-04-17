import React, { useEffect } from "react";
import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import CreateBoard from "./CreateBoard";
import BoardsList from "./BoardsList";
import Board from "./Board";
import UserSelector from "./UserSelector";
function App() {
    const [username, setUsername] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [userData, setUserData] = useState({});
    const [selectedBoardIndex, setSelectedBoardIndex] = useState("");

    useEffect(() => {
        if (localStorage.getItem("currentUsername") !== null && username === "") {
            let currUser = localStorage.getItem("currentUsername");
            let state = JSON.parse(localStorage.getItem(currUser));  
            setUsername(currUser);
            setUserData(state);
            setSubmitted(true);
            console.log("reloading");
        }
    })
    const onChange = (e) => {
        setUsername(e.target.value);
    };

    const changeUsername = (newUser) => {

        if(newUser === "") {
            //logout
            console.log("logging out");
            setUsername("");
            setSubmitted(false);
            setUserData({});
            return;
        }
        localStorage.setItem("currentUsername", newUser);
        setUsername(newUser)
        setSubmitted(true);
        setUserData(JSON.parse(localStorage.getItem(newUser)) == null ?  {boards: [],
            username: newUser} : JSON.parse(localStorage.getItem(newUser)) );
        setSelectedBoardIndex("");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(username === "") return;
        setSubmitted(true);
        
        let state = {
            boards: [],
            username: username
        };
        //check if username is in local storage
        if (localStorage.getItem(username) === null) {
            //if not, add it
            localStorage.setItem(username, JSON.stringify(state));  
            localStorage.setItem("currentUsername", username);
            setUserData(state);
            return;
        }
        state = JSON.parse(localStorage.getItem(username));  
        console.log(state)
        
        setUserData(state);
        

        //window.location.reload();
    }
    

    const addBoard = (boardName) => {
        if(boardName === "") return;
        const newBoard = {
            id: uuidv4(),
            boardName: boardName,
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

    const addTodoContainer = (boardName, newContainerName) => {
        if(boardName === "" || newContainerName=="") return;
        const newTodoContainer = {
            id: uuidv4(),
            title: newContainerName,
            todos: []
        };
        console.log(newTodoContainer)
        
        console.log(boardName);
        for (var i = 0; i < userData.boards.length; i++) {
            console.log(userData.boards[i].boardName);
            if(userData.boards[i].boardName === boardName) {
                
                userData.boards[i].columns = [...userData.boards[i].columns, newTodoContainer];
                
                localStorage.setItem(username, JSON.stringify(userData));
                setUserData(userData);
                setUserData({
                    ...userData,
                    boards: userData.boards,
                    
                });
                break;
            }
        }
    }
    const selectBoard = (index) => {
        console.log(index);
        setSelectedBoardIndex(index);
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
        
        if(selectedBoardIndex === "") {
            return (
                <div>
                    <UserSelector currentUsername={username} changeUsername={changeUsername}/>
                    <CreateBoard addBoard={addBoard}/>
                    <BoardsList boardCtx={userData} selectBoard={selectBoard}/>
                </div>
            )
        } else {
            return (<div>
                <UserSelector currentUsername={username} changeUsername={changeUsername}/>
                <CreateBoard addBoard={addBoard} />
                            <Board boardIndex={selectedBoardIndex} boardCtx={userData} addTodoContainer={addTodoContainer}/>
                        </div>)
        }
        
    }
}

export default App;