import React from 'react';

const TaskDisplay = ({task}) => (
  <ul>
    <li>TASK: {task.title}</li>
    <li>Due by: {task.dueDate}</li>
    <li>Created on: {task.createDate}</li>
    <li>Description: {task.description}</li>
  </ul>
);

export default TaskDisplay;