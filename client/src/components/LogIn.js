import React, { useEffect } from "react";
import {useState} from "react";
import UserSelector from "./UserSelector";

function LogIn() {
    const [selectedBoardIndex, setSelectedBoardIndex] = useState("");
    const [username, setUsername] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [userData, setUserData] = useState({});

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
        setUsername(newUser);
        setSubmitted(true);
        setUserData(JSON.parse(localStorage.getItem(newUser)) == null ?  {boards: [],
            username: newUser} : JSON.parse(localStorage.getItem(newUser)) );
        setSelectedBoardIndex("");
    }

    const LogInUser = (e) => {
        e.preventDefault();
        if(username === "") return;
        setSubmitted(true);
        
        let state = {
            boards: [],
            tasks: [],
            username: username
        };
        //check if username is in local storage
        if (localStorage.getItem(username) === null) {
            localStorage.setItem(username, JSON.stringify(state));  
            localStorage.setItem("currentUsername", username);
            setUserData(state);
            return;
        }
        //console.log state
        state = JSON.parse(localStorage.getItem(username));  
        console.log(state)
        
        // set data to the user
        setUserData(state);
    }
    if(submitted === false) {
        return (
            <div>
                <form>
                    <h2>Please enter your username</h2>
                    <input type="text" name="nickname" placeholder="Enter your username" value={username} onChange={onChange}/>
                    <input type="button" value="Submit" onClick={LogInUser}/>
                </form>
            </div>
        )
    }
    else{
        return (
            <UserSelector currentUsername={username} changeUsername={changeUsername}/>
        )
    }
}

export default LogIn;