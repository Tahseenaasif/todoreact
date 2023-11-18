import { Component } from "react";

export class Todo extends Component {
  render() {
    // console.log("this.props in Todos",this.props)
    // console.log("this.props.index ",this.props.index)
    const {handledelete}=this.props;
    return (
     
      <div className="todo">
        <p>{this.props.todo.text}</p>
        <button onClick={()=>handledelete(this.props.index)}>x</button>
      </div>
    );
  }
}
