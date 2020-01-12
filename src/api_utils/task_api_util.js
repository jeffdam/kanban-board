import uniqid from "uniqid";

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
  const newTask = {};
  task.id = uniqid();
  newTask[task.id] = task;
  tasks[task.status] = Object.assign({}, tasks[task.status], newTask );
  saveTasks(tasks);
  return newTask;
};

export const deleteTask = task => {
  const tasks = fetchTasks();
  delete tasks[task.id];
  saveTasks(tasks);
};