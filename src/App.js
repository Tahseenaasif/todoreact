import React, { Component } from "react";
import "./styles.css";
import { List } from "./List";
import { Form } from "./Form";
import { todos as initialTodos } from "./data.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: initialTodos,
      text: ""
    };
  }

 

  handleSubmit = () => {
    const { text, todos } = this.state;
    if (text.trim() !== "") {
      this.setState({
        todos: [{ text, id: Date.now() }, ...todos],
        text: ""
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handledelete=(id)=>{
    // console.log("this is index",id)
   const todos=this.state.todos;
   todos.splice(id,1);
  //  console.log("this is the todos after slice",todos)
   this.setState({
    todos: todos
  });

  }
  render() {
    // console.log("this.state.text",this.state.text)
    const { todos } = this.state;
    return (
      <div className="App">
        <span>Todo</span>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.text}
        />
        <List todos={todos} handledelete={this.handledelete} />
      </div>
    );
  }
}