import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
 
  render() {
    const {todos,handledelete}=this.props;
    return (
      <div className="list">
        {todos.map((todo, i) => (
          <Todo key={i} todo={todo} index={i} handledelete={handledelete} />
        ))}
      </div>
    );
  }
}
