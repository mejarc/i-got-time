import React, { Component } from 'react';
// renders the list of tasks
// receives an array of tasks and 
// and onClick function from parent component
// when user clicks on task, sends a call to that
// onClick function with the task's id
// TODO: render only 1 task, with duration filter applied.

const TaskList = ({ tasks, onTaskClick }) => {
  if (tasks.length > 0){
    return (
      <ul>
      {tasks.map(task => 
        <Task key={task.id} onClick={() => onTaskClick(task.id)} />
      )}
      </ul>
    )
  }
};

export default TaskList;