import { RECEIVE_TASKS, RECEIVE_COMPLETED_TASK, REMOVE_COMPLETED_TASK } from "../actions/task_action";

const completedReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_TASKS:
      newState = Object.assign({}, oldState, action.tasks.completed);
      return newState;
    case RECEIVE_COMPLETED_TASK:
      newState = Object.assign({}, oldState, { [action.task.id]: action.task });
      return newState;
    case REMOVE_COMPLETED_TASK:
      newState = Object.assign({}, oldState);
      delete newState[action.task.id];
      return newState;
    default:
      return oldState;
  }
};

export default completedReducer;