import React from 'react';
import TaskFormEditContainer from '../task/task_form/task_form_edit_container';
import TaskInfo from './task_info';

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
    const editForm = <TaskFormEditContainer task={this.props.task} hideForm={this.changeFormState()}/>;
    const taskInfo = <TaskInfo props={this.props} showForm={this.changeFormState()}/>;
    const display = this.state.formDisplayState ? editForm : taskInfo;

    return (
      <>
        {display}
      </>
    );
  }
}

export default TaskDisplay;