import React, { useEffect, useState } from "react";

export default function RecentTasks(props) {

    return (
        <div>
            <div>
                <h2>Recent Tasks</h2>
                <span>
                </span>
                <div>
                <ul>
                    {props.userData.tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.title}</span>
                        <span>{task.description}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    );
}