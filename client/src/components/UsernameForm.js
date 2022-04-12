import React from "react";
import {useState} from "react";

function UsernameForm() {
    const [username, setUsername] = useState("");

    const onChange = (e) => {
        setUsername(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("username", username);
        window.location.reload();
    }

    return (
        <div>
            <form>
                <h2>Please enter your username</h2>
                <input type="text" name="nickname" placeholder="Enter your username" value={username} onChange={onChange}/>
                <input type="button" value="Submit" onClick={onSubmit}/>
            </form>
        </div>
    )
}

export default UsernameForm;