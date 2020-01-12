import React from 'react';
import TaskFormEditContainer from '../task/task_form/task_form_edit_container';

const TaskDisplay = ({ task, deleteTask }) => (
  <ul>
    <li>TASK: {task.title}</li>
    <li>Due by: {task.dueDate}</li>
    <li>Created on: {task.createDate}</li>
    <li>Description: {task.description}</li>
    <li>
      <TaskFormEditContainer task={task} />
    </li>
    <li>
      <button onClick={deleteTask}>Delete</button>
    </li>
  </ul>
);

export default TaskDisplay;