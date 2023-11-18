import React, { Component } from "react";

export class Form extends Component {
  render() {
    const { handleChange, handleSubmit, inputValue } = this.props;
    return (
      <div className="form">
        <input
          onChange={handleChange}
          value={inputValue}
          placeholder="What's on your mind?"
          required
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
    );
  }
}