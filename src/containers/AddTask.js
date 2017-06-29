import AddTaskForm from '../components/AddTaskForm';
import { connect } from 'react-redux';
import { addTask } from '../actions/task';

// implements onSubmit that AddTaskForm receives as prop.
// bridge between Redux and AddTaskForm
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text, duration) => {
      dispatch(addTask(text, duration))
    }
  }
}

let AddTask = connect(null, mapDispatchToProps)(AddTaskForm);

export default AddTask;