import React from 'react';
import TaskDisplayContainer from '../task_display/task_display_container';
import TaskFormCreateContainer from '../task_form/task_form_create_container';

class TaskList extends React.Component {
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
    const { tasks, deleteTask, listType } = this.props;
    const taskDisplayList = tasks.map((task, idx) => 
      <TaskDisplayContainer
        key={idx}
        task={task}
        deleteTask={() => deleteTask(task)}
      />
    );

    const taskForm = <TaskFormCreateContainer status={listType} hideForm={this.changeFormState()}/>;
    const taskFormButton = <button onClick={this.changeFormState()}>Add Task</button>;
    const taskFormDisplay = this.state.formDisplayState ? taskForm : taskFormButton;

    return (
      <article className="task-list">
        <div className="task-list-items">
          {taskDisplayList}
        </div>
        {taskFormDisplay}
      </article>
    );
  }
}

export default TaskList;