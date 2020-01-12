import uniqid from "uniqid";

const STATUSES = ["backlog", "priority", "inProgress", "completed"];

const saveTasks = tasks => {
  localStorage.setItem("kanban_board", JSON.stringify(tasks));
};

export const fetchTasks = () => {
  const savedTasks = localStorage.getItem("kanban_board");
  const taskTemplate = {
    backlog: {},
    priority: {},
    inProgress: {},
    completed: {}
  };
  return savedTasks ? JSON.parse(savedTasks) : taskTemplate;
};

export const createTask = task => {
  const tasks = fetchTasks();
  task.id = uniqid();
  const newTask = {[task.id]: task};
  tasks[task.status] = Object.assign({}, tasks[task.status], {[task.id]: task} );
  saveTasks(tasks);
  return newTask;
};

export const updateTask = task => {
  const tasks = fetchTasks();
  const newTask = { [task.id]: task };
  tasks[task.status] = Object.assign({}, tasks[task.status], newTask);
  saveTasks(tasks);
  return newTask;
};

export const deleteTask = task => {
  const tasks = fetchTasks();
  delete tasks[task.status][task.id];
  saveTasks(tasks);
};

export const changeStatus = task => {
  const tasks = fetchTasks();
  delete tasks[task.status][task.id];
  task.status = STATUSES[STATUSES.indexOf(task.status) + 1];
  tasks[task.status][task.id] = task;
  saveTasks(tasks);
  return tasks;
};