import backlogReducer from "./backlog_reducer";
// import priorityReducer from "./priority_reducer";
// import inProgressReducer from "./inProgress_reducer";
// import completedReducer from "./completed_reducer";
import { combineReducers } from "redux";

const entitiesReducers = combineReducers({
  backlog: backlogReducer,
  // priority: priorityReducer,
  // inProgress: inProgressReducer,
  // completed: completedReducer
});

export default entitiesReducers;
