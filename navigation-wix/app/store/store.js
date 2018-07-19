import { createStore, combineReducers, compose } from "redux";

import tasksReducer from "./reducers/tasks";

const rootReducer = combineReducers({
  tasks: tasksReducer
});

let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
