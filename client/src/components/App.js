import React, { useEffect } from "react";
import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import CreateBoard from "./CreateBoard";
import BoardsList from "./BoardsList";
import Board from "./Board";
import UserSelector from "./UserSelector";
import RecentTasks from "./RecentTasks";
import LogIn from './LogIn.js';

function App() {
    const [selectedBoardIndex, setSelectedBoardIndex] = useState("");
    const [username, setUsername] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [userData, setUserData] = useState({});

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
        if(boardName === "" || newContainerName === "") return;
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


    const updateUserData = (userData) => {
        localStorage.setItem(username, JSON.stringify(userData));
        setUserData({...userData});

    }
    return (
        <LogIn></LogIn>
    )

    // } else {
    //     if(selectedBoardIndex === "") {
    //         return (
    //             <div>
    //                 <CreateBoard addBoard={addBoard}/>
    //                 <BoardsList boardCtx={userData} selectBoard={selectBoard}/>
    //             </div>
    //         )
    //     } else {
    //         return (
    //         <div>
    //             <CreateBoard addBoard={addBoard} />
    //             <Board boardIndex={selectedBoardIndex} boardCtx={userData} updateUserData={updateUserData} addTodoContainer={addTodoContainer}/>
    //             <RecentTasks userData={userData}/>
    //         </div>        
    //     )
    // }
}

export default App;