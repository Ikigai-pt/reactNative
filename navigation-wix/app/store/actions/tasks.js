import { LOAD_TASKS, ADD_TASK } from "./actionTypes";

export const loadTasks = () => {
  return {
    type: LOAD_TASKS,
    tasks: tasks
  };
};

export const addTask = task => {
  return {
    type: ADD_TASK,
    task: task
  };
};
