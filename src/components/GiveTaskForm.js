import React, { Component } from 'react';
// renders a number input and a button
// receives an onSubmit function from parent component
// sends a call to that function with number input value
// on form submit.

const GiveTaskForm = ({ onSubmit }) => {
  let select;
  return (
    <div>
      <form onSubmit={(e) => { onSubmit(select.value)}}>
        <label>I have <input ref={node => { select = node }} type="number" min="5" max="15" step="5" required value="10" /> minutes available.</label>
        <button>Give me a task</button>
      </form>
    </div>
  );
};

export default GiveTaskForm;