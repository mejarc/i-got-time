const task = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, {
        id: action.id,
        text: action.text,
        duration: action.duration,
        completed: false
      }]

    case 'TOGGLE_TASK':
      return state.map(task => {
        if (task.id !== action.id) {
          return task
        }

        return Object.assign({},
          task, {
            completed: !task.completed
          })
      })
    case 'SET_DURATION_FILTER':
      {
        return action.duration
      }

    default:
      return state
  }
}
