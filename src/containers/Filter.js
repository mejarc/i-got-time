import { connect } from 'react-redux';
import { setDurationFilter } from '../actions';
import GiveTaskForm from '../components/GiveTaskForm';

const mapStateToProps = (state, ownProps) => {
  return {
    duration: ownProps.duration === state.duration
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setDurationFilter(ownProps.duration))
    }
  }

}

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
  )(GiveTaskForm);

export default Filter;