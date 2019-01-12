import React from "react";

class AddTodo extends React.Component  {

    constructor(props){
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(e){
        e.preventDefault();
        const todo = e.target.elements.todo.value.trim();
        e.target.elements.todo.value = "";
        this.props.handleAddTodo(todo);
    }

    render(){
        return (
            <form onSubmit={this.handleAddTodo}>
                <input name="todo" type="text" placeholder="Add Todo"></input>
                <button>Add</button>
            </form>
        );
    }
}
export default AddTodo;