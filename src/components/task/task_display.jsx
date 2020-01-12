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
    const editFormButton = (<button onClick={this.changeFormState()}>Edit</button>);
    const taskForm = this.state.formDisplayState ? editForm : editFormButton;

    return (
      <ul>
        <li>TASK: {task.title}</li>
        <li>Due by: {task.dueDate}</li>
        <li>Created on: {task.createDate}</li>
        <li>Description: {task.description}</li>
        <li>
          { taskForm }
        </li>
        <li>
          <button onClick={deleteTask}>Delete</button>
        </li>
      </ul>
    );
  }
}

export default TaskDisplay;