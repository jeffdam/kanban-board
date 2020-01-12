import { RECEIVE_TASKS, RECEIVE_IN_PROGRESS_TASK, REMOVE_IN_PROGRESS_TASK } from "../actions/task_action";

const inProgressReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_TASKS:
      newState = Object.assign({}, oldState, action.tasks.inProgress);
      return newState;
    case RECEIVE_IN_PROGRESS_TASK:
      newState = Object.assign({}, oldState, { [action.task.id]: action.task });
      return newState;
    case REMOVE_IN_PROGRESS_TASK:
      newState = Object.assign({}, oldState);
      delete newState[action.task.id];
      return newState;
    default:
      return oldState;
  }
};

export default inProgressReducer;