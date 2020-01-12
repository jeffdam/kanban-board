import React from 'react';
import TaskDisplayContainer from '../task/task_display_container';
import TaskFormCreateContainer from '../task/task_form/task_form_create_container';

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
    const taskDisplayList = tasks.map((task, idx) => (
      <TaskDisplayContainer
        key={idx}
        task={task}
        deleteTask={() => deleteTask(task)}
      />
    ));

    const taskForm = this.state.formDisplayState ? (
      <TaskFormCreateContainer
        status={listType}
        hideForm={this.changeFormState()}
      />
    ) : (
      <button onClick={this.changeFormState()}>Add task</button>
    );

    return (
      <article>
        <h2>{listType.toUpperCase()}</h2>
        {taskDisplayList}
        {taskForm}
      </article>
    );
  }
}

export default TaskList;