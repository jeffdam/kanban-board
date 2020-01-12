import React from 'react';

const BacklogList = ({ tasks }) => {
  const taskDisplayList = tasks.map(task => (
    <ul key={task.id}>
      <li>TASK: {task.title}</li>
      <li>Due by: {task.dueDate}</li>
      <li>Created on: {task.createDate}</li>
      <li>Description: {task.description}</li>
    </ul>
  ));
  return (
    <article>
      <h2>BACKLOG</h2>
      { taskDisplayList }
    </article>
  )
};

export default BacklogList;