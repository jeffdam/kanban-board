import React from 'react';

const TaskInfo = ({ props: { task, deleteTask, changeStatus }, showForm}) => {
  const editFormButton = <i className="fas fa-edit" onClick={showForm} title="Edit Task"></i>;
  const moveUpButton = <i className="fas fa-arrow-alt-circle-right" onClick={() => changeStatus(task, "up")}></i>;
  const moveDownButton = <i className="fas fa-arrow-alt-circle-left" onClick={() => changeStatus(task, "down")}></i>;
  const deleteButton = <i className="fas fa-trash-alt" onClick={deleteTask} title="Delete Task"></i>;
  const showMoveUpButton = task.status === "completed" ? "" : moveUpButton;
  const showMoveDownButton = task.status === "backlog" ? "" : moveDownButton;
  const dueDate = task.dueDate.length ? new Date(task.dueDate).toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }) : "";
  return (
    <ul>
      <li>Task: {task.title}</li>
      <li>Notes: {task.notes}</li>
      <li>Created: {task.createDate}</li>
      <li>Due: {dueDate}</li>
      <li className="task-buttons">
        {editFormButton}
        {deleteButton}
        {showMoveDownButton}
        {showMoveUpButton}
      </li>
    </ul>
  );
};

export default TaskInfo;