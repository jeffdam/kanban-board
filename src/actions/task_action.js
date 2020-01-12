import * as TaskApiUtil from "../api_utils/task_api_util";

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_BACKLOG_TASK = "RECEIVE_BACKLOG_TASK";
export const REMOVE_BACKLOG_TASK = "REMOVE_BACKLOG_TASK";
export const RECEIVE_PRIORITY_TASK = "RECEIVE_PRIORITY_TASK";
export const REMOVE_PRIORITY_TASK = "REMOVE_PRIORITY_TASK";
export const RECEIVE_IN_PROGRESS_TASK = "RECEIVE_IN_PROGRESS_TASK";
export const REMOVE_IN_PROGRESS_TASK = "REMOVE_IN_PROGRESS_TASK";
export const RECEIVE_COMPLETED_TASK = "RECEIVE_COMPLETED_TASK";
export const REMOVE_COMPLETED_TASK = "REMOVE_COMPLETED_TASK";

const receiveTaskTypes = {
  backlog: RECEIVE_BACKLOG_TASK,
  priority: RECEIVE_PRIORITY_TASK,
  inProgress: RECEIVE_IN_PROGRESS_TASK,
  completed: RECEIVE_COMPLETED_TASK
};
const removeTaskTypes = {
  backlog: REMOVE_BACKLOG_TASK,
  priority: REMOVE_PRIORITY_TASK,
  inProgress: REMOVE_IN_PROGRESS_TASK,
  completed: REMOVE_COMPLETED_TASK
};

const receiveTasks = tasks => {
  return {
    type: RECEIVE_TASKS,
    tasks
  };
};

const receiveTask = task => {
  const type = receiveTaskTypes[task.status];
  return {
    type,
    task
  };
};

const removeTask = task => {
  const type = removeTaskTypes[task.status];
  return {
    type,
    task
  };
};

export const fetchTasks = () => {
  const tasks = TaskApiUtil.fetchTasks();
  return receiveTasks(tasks);
};

export const createTask = task => {
  TaskApiUtil.createTask(task);
  return receiveTask(task);
};

export const updateTask = task => {
  TaskApiUtil.updateTask(task);
  return receiveTask(task);
};

export const deleteTask = task => {
  TaskApiUtil.deleteTask(task);
  return removeTask(task);
};

export const changeStatus = task => {
  const tasks = TaskApiUtil.changeStatus(task);
  return receiveTasks(tasks);
};