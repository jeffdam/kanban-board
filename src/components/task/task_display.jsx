import React from 'react';
import TaskFormEditContainer from '../task/task_form/task_form_edit_container';

class TaskDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formDisplayState: false
    };
  }

  changeFormState() {
    return () => {
      this.setState({ formDisplayState: !this.state.formDisplayState });
    };
  }

  render() {
    const { task, deleteTask } = this.props;
    const editForm = (<TaskFormEditContainer task={task} hideForm={this.changeFormState()}/>);
    const editFormButton = <i className="fas fa-edit" onClick={this.changeFormState()} title="Edit Task"></i>
    const moveUpButton = <i className="fas fa-arrow-alt-circle-right" onClick={() => this.props.changeStatus(task, "up")}></i>
    const moveDownButton = <i className="fas fa-arrow-alt-circle-left" onClick={() => this.props.changeStatus(task, "down")}></i>
    const showMoveUpButton = task.status === "completed" ? "" : moveUpButton;
    const showMoveDownButton = task.status === "backlog" ? "" : moveDownButton;
    const taskInfo = (
      <ul>
        <li>TASK: {task.title}</li>
        <li>Due by: {task.dueDate}</li>
        <li>Created on: {task.createDate}</li>
        <li>Description: {task.description}</li>
        <li className="task-buttons">
          {editFormButton}
          <i
            className="fas fa-trash-alt"
            onClick={deleteTask}
            title="Delete Task"
          ></i>
          {showMoveDownButton}
          {showMoveUpButton}
        </li>
      </ul>
    );

    const display = this.state.formDisplayState ? editForm : taskInfo

    return (
      <>
        {display}
      </>
    );
  }
}

export default TaskDisplay;