import React from 'react';
import TaskDisplay from '../task/task_display';
import TaskFormCreateContainer from '../task/task_form/task_form_create_container';

class BacklogList extends React.Component {
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
    const { tasks, deleteTask } = this.props;
    const taskDisplayList = tasks.map((task, idx) => 
      <TaskDisplay 
        key={idx} 
        task={task} 
        deleteTask={() => deleteTask(task)} 
        />
    );

    const taskForm = this.state.formDisplayState ? (
      <TaskFormCreateContainer
        status={"backlog"}
        changeFormState={this.changeFormState()}
      />
    ) : (
      <button onClick={this.changeFormState()}>Add task</button>
    );

    return (
      <article>
        <h2>BACKLOG</h2>
        { taskDisplayList }
        { taskForm }
      </article>
    )
  }
}

export default BacklogList;