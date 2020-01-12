import * as TaskApiUtil from "../api_utils/task_api_util";

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_BACKLOG_TASK = "RECEIVE_BACKLOG_TASK";
export const REMOVE_BACKLOG_TASK = "REMOVE_BACKLOG_TASK";

const receiveTasks = tasks => {
  return {
    type: RECEIVE_TASKS,
    tasks
  };
};

const receiveTask = task => {
  const type = RECEIVE_BACKLOG_TASK;
  return {
    type,
    task
  };
};

const removeTask = task => {
  const type = REMOVE_BACKLOG_TASK;
  return {
    type,
    task
  };
};

export const fetchTasks = () => {
  const tasks = TaskApiUtil.fetchTasks();
  return receiveTasks(tasks);
};

export const createTask = (task) => {
  const newTask = TaskApiUtil.createTask(task);
  return receiveTask(newTask);
};

export const updateTask = task => {
  const newTask = TaskApiUtil.updateTask(task);
  return receiveTask(newTask);
};

export const deleteTask = task => dispatch =>
  TaskApiUtil.deleteTask(task)
    .then(task => dispatch(removeTask(task)));