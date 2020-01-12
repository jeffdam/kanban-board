import React from 'react';
import TaskDisplay from '../task/task_display';
import TaskFormCreateContainer from '../task/task_form/task_form_create_container';

const BacklogList = ({ tasks }) => {
  const taskDisplayList = tasks.map((task, idx) => (
    <TaskDisplay key={idx} task={task}/>
  ));
  return (
    <article>
      <h2>BACKLOG</h2>
      { taskDisplayList }
      <TaskFormCreateContainer status={"backlog"}/>
    </article>
  )
};

export default BacklogList;