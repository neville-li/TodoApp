import React from "react";
import ReactDOM from "react-dom";

import Todo from "./Todo";

const Todos = (props) => {
    return (
        <div>
            {props.todos.map((todo, index) => {
                return <Todo key={index} todo={todo}/>
            })}
        </div>
    );
}

export default Todos;