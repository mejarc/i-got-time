import TaskList from '../components/TaskList';
import { connect } from 'react-redux';
import { toggleTask } from '../actions';

// bridge between Redux and TaskList component
// receives duration filter and list of tasks from Redux
// generates new array of tasks filtered by duration
// sends filtered array to the TaskList component
// implements the onTaskClick function on the Task component
const getVisibleTasks = (tasks, filter) => {
  switch(filter) {
    case 10:
      return tasks.filter(task => task.duration === 10 && !task.completed)
    case 15:
      return tasks.filter(task => task.duration === 15 && !task.completed)
    case 20:
      return tasks.filter(task => task.duration === 20 && !task.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskClick: (id) => {
      dispatch(toggleTask(id))
    }
  }
}

const VisibleTaskList = connect(
  mapDispatchToProps,
  mapStateToProps
  )(TaskList);

export default VisibleTaskList;