import React from "react";
import Header from "./Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.state = {
            todos : ["todo1", "todo2"]
        };
    }

    handleAddTodo(todo) {
        this.setState((state) => {
            state.todos.push(todo);
            return {
                todos: state.todos
            }
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Todos todos={this.state.todos}/>
                <AddTodo handleAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
}

export default TodoApp;