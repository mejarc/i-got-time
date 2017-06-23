export const addTask = (text, duration) => {
  return {
    type: 'ADD_TASK',
    id: nextTaskId++,
    text,
    duration: duration,
    completed: false
  }
}

export const setDurationFilter = (duration) => {
  return {
    type: 'SET_DURATION_FILTER',
    duration
  }
}
export const toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    id
  }
}
