import React, { Component } from 'react';
import AddTask from '../containers/AddTask';
import TaskList from '../containers/TaskList';
import Filter from '../containers/Filter';
import '../index.css';

const App = () => {
  <div>
    <AddTask />
    <TaskList />
    <Filter />
  </div>
}

export default App;
