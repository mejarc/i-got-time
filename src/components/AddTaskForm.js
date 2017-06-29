import React, { Component } from 'react';
// renders a text input, a number input, and a button.
// receives an onSubmit function from parent component
// sends a call to that function with the form inputs' values
// on form submit

const AddTaskForm = ({ onSubmit }) => {
  let input, select;
  return (
    <div>
      <form onSubmit={(e) => { onSubmit(input.value, select.value)}}>
        <label>Task<input ref={node => { input = node }} required /></label>
        <label>Duration<input ref={node => { select = node }} type="number" min="5" max="15" step="5" required value="10" /></label>
        <button>Add Task</button>
      </form>
    </div>
  )

};
export default AddTaskForm;