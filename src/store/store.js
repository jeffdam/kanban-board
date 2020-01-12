import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) => {
  let middleware = [];
  if (process.env.NODE_ENV !== "production") {
    middleware = [...middleware, logger];
  }
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
