import { RECEIVE_TASKS, RECEIVE_BACKLOG_TASK, REMOVE_BACKLOG_TASK } from "../actions/task_action";

const backlogReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_TASKS:
      newState = Object.assign({}, oldState, action.tasks.backlog);
      return newState;
    case RECEIVE_BACKLOG_TASK:
      newState = Object.assign({}, oldState, action.task);
      return newState;
    case REMOVE_BACKLOG_TASK:
      newState = Object.assign({}, oldState);
      delete newState[action.task.id];
      return newState;
    default:
      return oldState;
  }
};

export default backlogReducer;