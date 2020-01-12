import { RECEIVE_TASKS, RECEIVE_PRIORITY_TASK, REMOVE_PRIORITY_TASK } from "../actions/task_action";

const priorityReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks.priority;
    case RECEIVE_PRIORITY_TASK:
      newState = Object.assign({}, oldState, { [action.task.id]: action.task });
      return newState;
    case REMOVE_PRIORITY_TASK:
      newState = Object.assign({}, oldState);
      delete newState[action.task.id];
      return newState;
    default:
      return oldState;
  }
};

export default priorityReducer;